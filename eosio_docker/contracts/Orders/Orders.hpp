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
    using eosio::key256;
    using eosio::asset;

    class Orders : public contract{
        using contract::contract;

    public:
        Orders(account_name self):contract(self) {}

        /*
            Initialization = 0
            OrderReady = 1
            OrderTaken = 2
            OrderDelivered = 3
            OrderEnd = 4
            OrderCancel = 8
        */
        //@abi action
        void initialize(account_name buyer, account_name seller, account_name deliver,asset& priceOrder, asset& priceDeliver);

        //@abi action
        void validatebuy(uint64_t orderKey, const checksum256& commitment);

        //@abi action
        void validatedeli(uint64_t orderKey);

        //@abi action
        void validatesell(uint64_t orderKey, const checksum256& commitment);

        //@abi action
        void orderready(uint64_t orderKey);

        //@abi action
        void ordertaken(uint64_t orderKey, const checksum256& source);

        //@abi action
        void orderdelive(uint64_t orderKey, const checksum256& source);

        //@abi action
        void ordercancel(uint64_t orderKey, const checksum256& source);

        //@abi action
        void getorder(const uint64_t orderKey);

        //@abi action
        void getorderbyse(const account_name seller);

        //@abi action
        void getorderbybu(const account_name buyer);

        //@abi action
        void getorderbyde(const account_name deliver);

        //@abi table order i64
        struct order {
            uint64_t orderKey;
            account_name buyer;
            account_name seller;
            account_name deliver;
            uint64_t state;
            eosio::time_point_sec date;
            checksum256 takeverification;
            checksum256 deliveryverification;
            asset priceOrder;
            asset priceDeliver;
            bool validateBuyer;
            bool validateSeller;
            bool validateDeliver;

            uint64_t primary_key() const { return orderKey; }
            account_name get_buyer_key() const { return buyer; }
            account_name get_seller_key() const { return seller; }
            account_name get_deliver_key() const { return deliver; }

            static key256 get_commitment(const checksum256& commitment) {
                const uint64_t *p64 = reinterpret_cast<const uint64_t *>(&commitment);
                return key256::make_from_word_sequence<uint64_t>(p64[0], p64[1], p64[2], p64[3]);
            }

            EOSLIB_SERIALIZE(order, (orderKey)(buyer)(seller)(deliver)(state)(date)(takeverification)(deliveryverification)(priceOrder)(priceDeliver)(validateBuyer)(validateDeliver)(validateSeller))
        };

        typedef multi_index<N(order), order,
            indexed_by < N(bybuyerkey),
                    const_mem_fun <order, account_name, &order::get_buyer_key>
            >,
            indexed_by < N(bysellerkey),
                    const_mem_fun <order, account_name, &order::get_seller_key>
            >,
            indexed_by < N(bydeliverkey),
                    const_mem_fun <order, account_name, &order::get_deliver_key>
            >
        > orderIndex;
    };
}
