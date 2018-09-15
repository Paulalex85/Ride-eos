#include "Market.hpp"
#include "../Users/Users.hpp"

namespace rideEOS {

    EOSIO_ABI(Market, (addplace)(updateplace)(deleteplace)(newassign)(endassign));

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
}