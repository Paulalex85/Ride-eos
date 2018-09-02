#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/asset.hpp>
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
        void add(account_name account, string& username);

        //@abi action
        void update(account_name account, string& username);

        //@abi action
        void getuser(const account_name account);

        //@abi action
        void deposit(const account_name account,const asset& quantity);

        //@abi action
        void withdraw(const account_name account, const asset& quantity);

        //@abi table user i64
        struct user {
            uint64_t account_name;
            string username;
            asset balance;

            uint64_t primary_key() const { return account_name; }

            EOSLIB_SERIALIZE(user, (account_name)(username)(balance))
        };

        typedef multi_index<N(user), user> userIndex;
    };
}
