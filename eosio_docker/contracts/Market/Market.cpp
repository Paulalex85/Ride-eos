#include "Market.hpp"
#include "../Users/Users.hpp"
#include "../Orders/Orders.hpp"

namespace rideEOS {

    EOSIO_ABI(Market, (addplace)(updateplace)(deleteplace)(newassign)(endassign)(addoffer)(endoffer)(canceloffer)(addapply)(cancelapply));

    //24h
    int DELAY_END_ASSIGN = 86400;

    void Market::addplace(string &country, string &zipCode) {
        require_auth(_self);
        placeIndex places(_self, _self);

        places.emplace(_self, [&](auto& place) {
            place.placeKey = places.available_primary_key();
            place.country = country;
            place.zipCode = zipCode;
        });
    }

    void Market::updateplace(uint64_t key, string &country, string &zipCode) {
        require_auth(_self);

        placeIndex places(_self, _self);
        auto iteratorPlace = places.find(key);
        eosio_assert(iteratorPlace != places.end(), "Address for place not found");

        places.modify(iteratorPlace, _self, [&](auto& place) {
            place.country = country;
            place.zipCode = zipCode;
        });
    }

    void Market::deleteplace(uint64_t key) {
        require_auth(_self);

        placeIndex places(_self, _self);
        auto iteratorPlace = places.find(key);
        eosio_assert(iteratorPlace != places.end(), "Address for place not found");

        places.erase(iteratorPlace);
    }

    void Market::newassign(account_name account, uint64_t place) {
        require_auth(account);

        placeIndex places(_self, _self);
        auto iteratorPlace = places.find(place);
        eosio_assert(iteratorPlace != places.end(), "Place not found");

        Users::userIndex users(N(rideos), N(rideos));
        auto iteratorUser = users.find(account);
        eosio_assert(iteratorUser != users.end(), "User not found");

        assignmentIndex assignments(_self, _self);
        auto indexAssign = assignments.get_index<N(byuserkey)>();
        auto iteratorAssign = indexAssign.find(account);

        while (iteratorAssign != indexAssign.end()) {
            eosio_assert(iteratorAssign->endAssignment != eosio::time_point_sec(0), "Already a current assignment");
            eosio_assert(iteratorAssign->endAssignment < eosio::time_point_sec(now()), "The end of the last assign isn't passed");
            iteratorAssign++;
        }

        assignments.emplace(_self, [&](auto& assign) {
            assign.assignmentKey = assignments.available_primary_key();
            assign.userKey = account;
            assign.placeKey = iteratorPlace->primary_key();
        });
    }

    void Market::endassign(uint64_t assignmentKey) {
        assignmentIndex assignments(_self, _self);
        auto iteratorAssign = assignments.find(assignmentKey);
        eosio_assert(iteratorAssign != assignments.end(), "Assignment not found");

        require_auth(iteratorAssign->userKey);

        assignments.modify(iteratorAssign, _self, [&](auto& assign) {
            assign.endAssignment = eosio::time_point_sec(now() + DELAY_END_ASSIGN);
        });
    }

    void Market::addoffer(uint64_t orderKey, uint64_t placeKey) {
        Orders::orderIndex orders(N(rideor), N(rideor));
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Order not found");

        require_auth(iteratorOrder->buyer);

        eosio_assert(iteratorOrder->state == 0,"The state of the order don't need a deliver");

        placeIndex places(_self, _self);
        auto iteratorPlace = places.find(placeKey);
        eosio_assert(iteratorPlace != places.end(), "Place not found");

        offerIndex offers(_self, _self);

        offers.emplace(_self, [&](auto& offer) {
            offer.offerKey = offers.available_primary_key();
            offer.orderKey = orderKey;
            offer.placeKey = placeKey;
            offer.stateOffer = 0;
        });
    }

    void Market::endoffer(uint64_t offerKey) {
        offerIndex offers(_self, _self);
        auto iteratorOffer = offers.find(offerKey);
        eosio_assert(iteratorOffer != offers.end(), "Offer not found");

        eosio_assert(iteratorOffer->stateOffer == 0,"The state of the offer is not open");

        Orders::orderIndex orders(N(rideor), N(rideor));
        auto iteratorOrder = orders.find(iteratorOffer->orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Order not found");

        require_auth(iteratorOrder->buyer);

        applyIndex applies(_self, _self);
        auto indexApply = applies.get_index<N(byoffer)>();
        auto iteratorApply = indexApply.find(offerKey);
        eosio_assert(iteratorApply != indexApply.end(), "No apply for this offer");

        Users::userIndex users(N(rideos), N(rideos));

        bool found_one = false;
        account_name deliver;
        asset current_best_asset;

        while (iteratorApply != indexApply.end()) {
            auto iteratorUser = users.find(iteratorApply->deliver);
            if(iteratorUser != users.end() && iteratorUser->balance.symbol == CORE_SYMBOL
                    && iteratorUser->balance.is_valid()){
                if(!found_one || iteratorUser->balance > current_best_asset){
                    deliver = iteratorApply->deliver;
                    current_best_asset = iteratorUser->balance;
                    found_one = true;
                }
            }
            iteratorApply++;
        }

        eosio_assert(found_one,"No deliver found");

        action(
            permission_level{ iteratorOrder->buyer, N(active) },
            N(rideor), N(deliverfound),
            std::make_tuple(deliver, iteratorOffer->orderKey)
        ).send();

        offers.modify(iteratorOffer, _self, [&](auto& offer) {
            offer.stateOffer = 2;
        });
    }

    void Market::canceloffer(uint64_t offerKey) {
        offerIndex offers(_self, _self);
        auto iteratorOffer = offers.find(offerKey);
        eosio_assert(iteratorOffer != offers.end(), "Offer not found");

        eosio_assert(iteratorOffer->stateOffer == 0,"The state of the offer is not open");

        Orders::orderIndex orders(N(rideor), N(rideor));
        auto iteratorOrder = orders.find(iteratorOffer->orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Order not found");

        require_auth(iteratorOrder->buyer);

        offers.modify(iteratorOffer, _self, [&](auto& offer) {
            offer.stateOffer = 1;
        });
    }

    void Market::addapply(account_name account, uint64_t offerKey) {
        require_auth(account);

        Users::userIndex users(N(rideos), N(rideos));
        auto iteratorUser = users.find(account);
        eosio_assert(iteratorUser != users.end(), "User not found");

        offerIndex offers(_self, _self);
        auto iteratorOffer = offers.find(offerKey);
        eosio_assert(iteratorOffer != offers.end(), "Offer not found");

        eosio_assert(iteratorOffer->stateOffer == 0, "The offer is not open");

        applyIndex applies(_self, _self);

        applies.emplace(_self, [&](auto& apply) {
            apply.applyKey = applies.available_primary_key();
            apply.deliver = account;
            apply.offerKey = offerKey;
        });
    }

    void Market::cancelapply(uint64_t applyKey) {
        applyIndex applies(_self, _self);
        auto iteratorApply = applies.find(applyKey);
        eosio_assert(iteratorApply != applies.end(), "Apply not found");

        require_auth(iteratorApply->deliver);

        applies.erase(iteratorApply);
    }
}