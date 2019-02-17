#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>

using namespace eosio;

using std::string;

#include "table/stackpower.hpp"
#include "table/user.hpp"
#include "contract/user_action.hpp"

CONTRACT rideos : public eosio::contract
{

  private:
    user_action user_control;

  public:
    using contract::contract;
    // constructor
    rideos(name receiver, name code, datastream<const char *> ds) : contract(receiver, code, ds),
                                                                    user_control(receiver) {}

    ACTION adduser(name account, string & username);

    ACTION updateuser(name account, string & username);

    ACTION deposit(const name account, const asset &quantity);

    ACTION withdraw(const name account, const asset &quantity);

    ACTION pay(const name accountUser, const name receiver, const asset &quantity);

    ACTION receive(const name account, const name from, const asset &quantity);

    ACTION stackpow(const name account, const asset &quantity, const uint64_t placeKey);

    ACTION unstackpow(const name account, const asset &quantity, const uint64_t stackKey);

#include "table/stackpower.hpp"
#include "table/user.hpp"
};