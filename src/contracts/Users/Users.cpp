#include "Users.hpp"

namespace rideEOS {

    EOSIO_ABI(Users, (add)(update)(getuser));

    void Users::add(account_name account, string& username) {
        require_auth(account);
        userIndex users(_self, _self);

        auto iterator = users.find(account);
        eosio_assert(iterator == users.end(), "Address for account already exists");

        users.emplace(account, [&](auto& user) {
            user.account_name = account;
            user.username = username;
        });
    }

    void Users::update(account_name account, string& username) {
        require_auth(account);
        userIndex users(_self, _self);

        auto iterator = users.find(account);
        eosio_assert(iterator != users.end(), "Address for account not found");

        users.modify(iterator, account, [&](auto& user) {
            user.username = username;
        });
    }

    void Users::getuser(const account_name account) {
        userIndex users(_self, _self);

        auto iterator = users.find(account);
        eosio_assert(iterator != users.end(), "Address for account not found");

        auto currentUser = users.get(account);
        print("Username: ", currentUser.username.c_str());
    }
}