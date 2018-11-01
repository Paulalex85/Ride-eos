#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/contract.hpp>
#include <string>

using namespace eosio;
namespace rideEOS {

    using namespace eosio;
    using std::string;
    using eosio::asset;
    using eosio::action;

    class Users : public contract{
        using contract::contract;

    public:
        Users(account_name self):contract(self) {}

        //@abi action
        void adduser(account_name account, string& username);

        //@abi action
        void updateuser(account_name account, string& username);

        //@abi action
        void getuser(const account_name account);

        //@abi action
        void deposit(const account_name account,const asset& quantity);

        //@abi action
        void withdraw(const account_name account, const asset& quantity);

        //@abi action
        void pay(const account_name accountUser,const account_name receiver, const asset& quantity);

        //@abi action
        void receive(const account_name account,const account_name from, const asset& quantity);

        //@abi table user i64
        struct user {
            account_name account;
            string username;
            asset balance;

            account_name primary_key() const { return account; }

            EOSLIB_SERIALIZE(user, (account)(username)(balance))
        };

        typedef multi_index<N(user), user> userIndex;
    };
}
