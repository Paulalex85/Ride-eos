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

    class Market : public contract{
        using contract::contract;

    public:
        Market(account_name self):contract(self) {}

        //@abi action
        void addplace(string& country,string& zipCode);

        //@abi action
        void updateplace(uint64_t key, string& country,string& zipCode);

        //@abi action
        void deleteplace(uint64_t key);

        //@abi action
        void newassign(account_name account, uint64_t place);

        //@abi action
        void endassign(uint64_t assignmentKey);

        //@abi table place i64
        struct place {
            uint64_t placeKey;
            string country;
            string zipCode;

            uint64_t primary_key() const { return placeKey; }

            EOSLIB_SERIALIZE(place, (placeKey)(country)(zipCode))
        };

        typedef multi_index<N(place), place> placeIndex;

        //@abi table assignment i64
        struct assignment {
            uint64_t assignmentKey;
            uint64_t placeKey;
            account_name userKey;
            eosio::time_point_sec endAssignment;

            uint64_t primary_key() const { return assignmentKey; }
            account_name get_user_key() const { return userKey; }

            EOSLIB_SERIALIZE(assignment, (assignmentKey)(placeKey)(userKey)(endAssignment))
        };
        typedef multi_index<N(assignment), assignment,
            indexed_by < N(byuserkey),
                    const_mem_fun <assignment, account_name , &assignment::get_user_key>
            >
        > assignmentIndex;

    };
}
