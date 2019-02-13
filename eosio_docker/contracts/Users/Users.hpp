#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>

using namespace eosio;

using std::string;

CONTRACT Users : public eosio::contract
{
  using contract::contract;

public:
  // constructor
  Users(name receiver, name code, datastream<const char *> ds) : contract(receiver, code, ds),
                                                                 _users(receiver, receiver.value),
                                                                 _stackpower(receiver, receiver.value) {}

  ACTION adduser(name account, string & username);

  ACTION updateuser(name account, string & username);

  ACTION deposit(const name account, const asset &quantity);

  ACTION withdraw(const name account, const asset &quantity);

  ACTION pay(const name accountUser, const name receiver, const asset &quantity);

  ACTION receive(const name account, const name from, const asset &quantity);

  ACTION stackpow(const name account, const asset &quantity, const uint64_t placeKey);

  ACTION unstackpow(const name account, const asset &quantity, const uint64_t stackKey);

  //@abi table user i64
  TABLE user
  {
    name account;
    string username;
    asset balance;

    uint64_t primary_key() const { return account.value; }
  };

  typedef multi_index<name("user"), user> user_table;

  //@abi table stackpower i64
  TABLE stackpower
  {
    uint64_t idStackPower;
    name account;
    asset balance;
    uint64_t placeKey;

    uint64_t primary_key() const { return idStackPower; }
    uint64_t get_account() const { return account.value; }
  };
  typedef multi_index<name("stackpower"), stackpower,
                      indexed_by<name("byaccount"),
                                 const_mem_fun<stackpower, uint64_t, &stackpower::get_account>>>
      stackpower_table;

  // accessor for external contracts to easily send inline actions to your contract
  using adduser_action = action_wrapper<"adduser"_n, &Users::adduser>;
  using updateuser_action = action_wrapper<"updateuser"_n, &Users::updateuser>;
  using deposit_action = action_wrapper<"deposit"_n, &Users::deposit>;
  using withdraw_action = action_wrapper<"withdraw"_n, &Users::withdraw>;
  using pay_action = action_wrapper<"pay"_n, &Users::pay>;
  using receive_action = action_wrapper<"receive"_n, &Users::receive>;
  using stackpow_action = action_wrapper<"stackpow"_n, &Users::stackpow>;

private:
  user_table _users;
  stackpower_table _stackpower;
};