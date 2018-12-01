#include "Market.hpp"

//24h
int DELAY_END_ASSIGN = 86400;

void Market::addplace(string &country, string &zipCode)
{
    require_auth(_self);

    _places.emplace(_self, [&](auto &place) {
        place.placeKey = _places.available_primary_key();
        place.country = country;
        place.zipCode = zipCode;
    });
}

void Market::updateplace(uint64_t key, string &country, string &zipCode)
{
    require_auth(_self);

    auto iteratorPlace = _places.find(key);
    eosio_assert(iteratorPlace != _places.end(), "Address for place not found");

    _places.modify(iteratorPlace, _self, [&](auto &place) {
        place.country = country;
        place.zipCode = zipCode;
    });
}

void Market::deleteplace(uint64_t key)
{
    require_auth(_self);

    auto iteratorPlace = _places.find(key);
    eosio_assert(iteratorPlace != _places.end(), "Address for place not found");

    std::vector<uint64_t> keysForDeletion;

    auto indexAssign = _assignments.get_index<name("byplacekey")>();
    auto iteratorAssign = indexAssign.find(key);

    while (iteratorAssign != indexAssign.end())
    {
        if (iteratorAssign->placeKey == key)
        {
            keysForDeletion.push_back(iteratorAssign->assignmentKey);
        }
        iteratorAssign++;
    }

    for (uint64_t keyDelete : keysForDeletion)
    {
        auto itr = _assignments.find(keyDelete);
        if (itr != _assignments.end())
        {
            _assignments.erase(itr);
        }
    }

    _places.erase(iteratorPlace);
}

void Market::newassign(name account, uint64_t placeKey)
{
    require_auth(account);

    auto iteratorPlace = _places.find(placeKey);
    eosio_assert(iteratorPlace != _places.end(), "Place not found");

    auto iteratorUser = _users.find(account.value);
    eosio_assert(iteratorUser != _users.end(), "User not found");

    auto indexAssign = _assignments.get_index<name("byuserkey")>();
    auto iteratorAssign = indexAssign.find(account.value);

    while (iteratorAssign != indexAssign.end())
    {
        eosio_assert(iteratorAssign->endAssignment != time_point_sec(0), "Already a current assignment");
        eosio_assert(iteratorAssign->endAssignment < time_point_sec(now()), "The end of the last assign isn't passed");
        iteratorAssign++;
    }

    _assignments.emplace(_self, [&](auto &assign) {
        assign.assignmentKey = _assignments.available_primary_key();
        assign.account = account;
        assign.placeKey = iteratorPlace->primary_key();
    });
}

void Market::endassign(uint64_t assignmentKey)
{

    auto iteratorAssign = _assignments.find(assignmentKey);
    eosio_assert(iteratorAssign != _assignments.end(), "Assignment not found");

    require_auth(iteratorAssign->account);

    _assignments.modify(iteratorAssign, _self, [&](auto &assign) {
        assign.endAssignment = time_point_sec(now() + DELAY_END_ASSIGN);
    });
}

void Market::addoffer(uint64_t orderKey, uint64_t placeKey)
{

    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state == 0, "The state of the order don't need a deliver");

    auto iteratorPlace = _places.find(placeKey);
    eosio_assert(iteratorPlace != _places.end(), "Place not found");

    _offers.emplace(_self, [&](auto &offer) {
        offer.offerKey = _offers.available_primary_key();
        offer.orderKey = orderKey;
        offer.placeKey = placeKey;
        offer.stateOffer = OPEN;
    });
}

void Market::endoffer(uint64_t offerKey)
{

    auto iteratorOffer = _offers.find(offerKey);
    eosio_assert(iteratorOffer != _offers.end(), "Offer not found");

    eosio_assert(iteratorOffer->stateOffer == OPEN, "The state of the offer is not open");

    auto iteratorOrder = _orders.find(iteratorOffer->orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Order not found");

    require_auth(iteratorOrder->buyer);

    auto indexApply = _applies.get_index<name("byoffer")>();
    auto iteratorApply = indexApply.find(offerKey);
    eosio_assert(iteratorApply != indexApply.end(), "No apply for this offer");

    bool found_one = false;
    name deliver;
    asset current_best_asset;

    while (iteratorApply != indexApply.end())
    {
        auto iteratorUser = _users.find(iteratorApply->deliver.value);
        if (iteratorUser != _users.end() && iteratorUser->balance.symbol == eosio::symbol("SYS", 4) && iteratorUser->balance.is_valid())
        {
            if (!found_one || iteratorUser->balance > current_best_asset)
            {
                deliver = iteratorApply->deliver;
                current_best_asset = iteratorUser->balance;
                found_one = true;
            }
        }
        iteratorApply++;
    }

    eosio_assert(found_one, "No deliver found");

    action(
        permission_level{iteratorOrder->buyer, name("active")},
        name("rideor"), name("deliverfound"),
        std::make_tuple(deliver, iteratorOffer->orderKey))
        .send();

    _offers.modify(iteratorOffer, _self, [&](auto &offer) {
        offer.stateOffer = FOUNDED;
    });
}

void Market::canceloffer(uint64_t offerKey)
{

    auto iteratorOffer = _offers.find(offerKey);
    eosio_assert(iteratorOffer != _offers.end(), "Offer not found");

    eosio_assert(iteratorOffer->stateOffer == OPEN, "The state of the offer is not open");

    auto iteratorOrder = _orders.find(iteratorOffer->orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Order not found");

    require_auth(iteratorOrder->buyer);

    _offers.modify(iteratorOffer, _self, [&](auto &offer) {
        offer.stateOffer = CLOSED;
    });
}

void Market::addapply(name account, uint64_t offerKey)
{
    require_auth(account);

    auto iteratorUser = _users.find(account.value);
    eosio_assert(iteratorUser != _users.end(), "User not found");

    auto iteratorOffer = _offers.find(offerKey);
    eosio_assert(iteratorOffer != _offers.end(), "Offer not found");

    eosio_assert(iteratorOffer->stateOffer == OPEN, "The offer is not open");

    _applies.emplace(_self, [&](auto &apply) {
        apply.applyKey = _applies.available_primary_key();
        apply.deliver = account;
        apply.offerKey = offerKey;
    });
}

void Market::cancelapply(uint64_t applyKey)
{

    auto iteratorApply = _applies.find(applyKey);
    eosio_assert(iteratorApply != _applies.end(), "Apply not found");

    require_auth(iteratorApply->deliver);

    _applies.erase(iteratorApply);
}

EOSIO_DISPATCH(Market, (addplace)(updateplace)(deleteplace)(newassign)(endassign)(addoffer)(endoffer)(canceloffer)(addapply)(cancelapply));
