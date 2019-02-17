#include "rideos.hpp"

using namespace eosio;

void rideos::adduser(name account, string &username)
{
    user_control.adduser(account, username);
}

void rideos::updateuser(name account, string &username)
{
    user_control.updateuser(account, username);
}

void rideos::deposit(const name account, const asset &quantity)
{
    user_control.deposit(account, quantity);
}

void rideos::withdraw(const name account, const asset &quantity)
{
    user_control.withdraw(account, quantity);
}

void rideos::pay(const name accountUser, const name receiver, const asset &quantity)
{
    user_control.pay(accountUser, receiver, quantity);
}

void rideos::receive(const name account, const name from, const asset &quantity)
{
    user_control.receive(account, from, quantity);
}

void rideos::stackpow(const name account, const asset &quantity, const uint64_t placeKey)
{
    user_control.stackpow(account, quantity, placeKey);
}

void rideos::unstackpow(const name account, const asset &quantity, const uint64_t stackKey)
{
    user_control.unstackpow(account, quantity, stackKey);
}

EOSIO_DISPATCH(rideos, (adduser)(updateuser)(deposit)(withdraw)(pay)(receive)(stackpow)(unstackpow))