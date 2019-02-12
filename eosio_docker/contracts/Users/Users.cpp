#include "Users.hpp"
#include "../Market/Market.hpp"
using namespace eosio;

ACTION Users::adduser(name account, string &username)
{
    require_auth(account);

    auto iterator = _users.find(account.value);
    eosio_assert(iterator == _users.end(), "Address for account already exists");

    _users.emplace(_self, [&](auto &user) {
        user.account = account;
        user.username = username;
        user.balance = eosio::asset(0, symbol(symbol_code("SYS"), 4));
    });
}

ACTION Users::updateuser(name account, string &username)
{
    require_auth(account);

    auto iterator = _users.find(account.value);
    eosio_assert(iterator != _users.end(), "Address for account not found");

    _users.modify(iterator, _self, [&](auto &user) {
        user.username = username;
    });
}

ACTION Users::deposit(const name account, const asset &quantity)
{
    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must deposit positive quantity");

    auto iterator = _users.find(account.value);
    eosio_assert(iterator != _users.end(), "Address for account not found");

    action(
        permission_level{account, name("active")},
        name("eosio.token"),
        name("transfer"),
        std::make_tuple(account, _self, quantity, std::string("")))
        .send();

    _users.modify(iterator, _self, [&](auto &user) {
        user.balance += quantity;
    });
}

ACTION Users::withdraw(const name account, const asset &quantity)
{
    require_auth(account);

    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must withdraw positive quantity");

    auto iterator = _users.find(account.value);
    eosio_assert(iterator != _users.end(), "Address for account not found");

    _users.modify(iterator, _self, [&](auto &user) {
        eosio_assert(user.balance >= quantity, "insufficient balance");
        user.balance -= quantity;
    });

    action(
        permission_level{_self, name("active")},
        name("eosio.token"), name("transfer"),
        std::make_tuple(_self, account, quantity, std::string("")))
        .send();
}

ACTION Users::pay(const name account, const name receiver, const asset &quantity)
{
    require_auth(account);

    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must withdraw positive quantity");
    eosio_assert(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    auto iterator = _users.find(account.value);
    eosio_assert(iterator != _users.end(), "Address for account not found");

    _users.modify(iterator, _self, [&](auto &user) {
        eosio_assert(user.balance >= quantity, "insufficient balance");
        user.balance -= quantity;
    });

    action(
        permission_level{_self, name("active")},
        name("eosio.token"), name("transfer"),
        std::make_tuple(_self, receiver, quantity, std::string("")))
        .send();
}

ACTION Users::receive(const name account, const name from, const asset &quantity)
{
    require_auth(from);

    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must withdraw positive quantity");
    eosio_assert(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    auto iterator = _users.find(account.value);
    eosio_assert(iterator != _users.end(), "Address for account not found");

    _users.modify(iterator, _self, [&](auto &user) {
        user.balance += quantity;
    });
}

ACTION Users::stackpow(const name account, const asset &quantity, const uint64_t placeKey)
{
    require_auth(account);

    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must withdraw positive quantity");
    eosio_assert(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    auto iteratorUser = _users.find(account.value);
    eosio_assert(iteratorUser != _users.end(), "Address for account not found");

    Market::place_table _places(name("rideom"), name("rideom").value);
    auto iteratorPlace = _places.find(placeKey);
    eosio_assert(iteratorPlace != _places.end(), "Place not found");
    eosio_assert(iteratorPlace->active == true, "Place is not active");

    eosio_assert(iteratorUser->balance >= quantity, "Insufficient balance");

    _users.modify(iteratorUser, _self, [&](auto &user) {
        user.balance -= quantity;
    });

    _stackpower.emplace(_self, [&](auto &stackpower) {
        stackpower.idStackPower = _stackpower.available_primary_key();
        stackpower.account = account;
        stackpower.balance = quantity;
        stackpower.placeKey = placeKey;
    });
}

ACTION Users::unstackpow(const name account, const asset &quantity, const uint64_t placeKey)
{
}

EOSIO_DISPATCH(Users, (adduser)(updateuser)(deposit)(withdraw)(pay)(receive)(stackpow)(unstackpow))