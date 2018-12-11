#include <eosiolib/eosio.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/time.hpp>

#include "../Users/Users.hpp"

using namespace eosio;
using std::string;

CONTRACT Orders : public eosio::contract
{
    using contract::contract;

  public:
    Orders(name receiver, name code, datastream<const char *> ds) : contract(receiver, code, ds),
                                                                    _orders(receiver, receiver.value),
                                                                    _users(name("rideos"), name("rideos").value) {}

    ACTION needdeliver(name buyer, name seller, asset & priceOrder, asset & priceDeliver, string & details, uint64_t delay);

    ACTION deliverfound(name deliver, uint64_t orderKey);

    ACTION initialize(name buyer, name seller, name deliver, asset & priceOrder, asset & priceDeliver, string & details, uint64_t delay);

    ACTION validatebuy(uint64_t orderKey, const capi_checksum256 &hash);

    ACTION validatedeli(uint64_t orderKey);

    ACTION validatesell(uint64_t orderKey, const capi_checksum256 &hash);

    ACTION orderready(uint64_t orderKey);

    ACTION ordertaken(uint64_t orderKey, const capi_checksum256 &source);

    ACTION orderdelive(uint64_t orderKey, const capi_checksum256 &source);

    ACTION initcancel(uint64_t orderKey, name account);

    ACTION delaycancel(uint64_t orderKey);

    enum order_state : uint8_t
    {
        NEED_DELIVER = 0,
        INITIALIZATION = 1,
        ORDER_READY = 2,
        ORDER_TAKEN = 3,
        ORDER_DELIVERED = 4,
        ORDER_END = 5,
        INIT_CANCEL = 99,
        ORDER_CANCEL = 98
    };

    TABLE order
    {
        uint64_t orderKey;
        name buyer;
        name seller;
        name deliver;
        uint8_t state;
        time_point_sec date;
        time_point_sec dateDelay;
        capi_checksum256 takeverification;
        capi_checksum256 deliveryverification;
        asset priceOrder;
        asset priceDeliver;
        bool validateBuyer;
        bool validateSeller;
        bool validateDeliver;
        string details;
        uint64_t delay;

        uint64_t primary_key() const { return orderKey; }
        uint64_t get_buyer_key() const { return buyer.value; }
        uint64_t get_seller_key() const { return seller.value; }
        uint64_t get_deliver_key() const { return deliver.value; }

        static fixed_bytes<32> checksum256_to_sha256(const capi_checksum256 &hash)
        {
            const uint64_t *p64 = reinterpret_cast<const uint64_t *>(&hash);
            return fixed_bytes<32>::make_from_word_sequence<uint64_t>(p64[0], p64[1], p64[2], p64[3]);
        }
    };

    typedef multi_index<name("order"), order,
                        indexed_by<name("bybuyerkey"),
                                   const_mem_fun<order, uint64_t, &order::get_buyer_key>>,
                        indexed_by<name("bysellerkey"),
                                   const_mem_fun<order, uint64_t, &order::get_seller_key>>,
                        indexed_by<name("bydeliverkey"),
                                   const_mem_fun<order, uint64_t, &order::get_deliver_key>>>
        order_table;

    // accessor for external contracts to easily send inline actions to your contract
    using needdeliver_action = action_wrapper<"needdeliver"_n, &Orders::needdeliver>;
    using deliverfound_action = action_wrapper<"deliverfound"_n, &Orders::deliverfound>;
    using initialize_action = action_wrapper<"initialize"_n, &Orders::initialize>;
    using validatebuy_action = action_wrapper<"validatebuy"_n, &Orders::validatebuy>;
    using validatedeli_action = action_wrapper<"validatedeli"_n, &Orders::validatedeli>;
    using validatesell_action = action_wrapper<"validatesell"_n, &Orders::validatesell>;
    using orderready_action = action_wrapper<"orderready"_n, &Orders::orderready>;
    using ordertaken_action = action_wrapper<"ordertaken"_n, &Orders::ordertaken>;
    using orderdelive_action = action_wrapper<"orderdelive"_n, &Orders::orderdelive>;
    using initcancel_action = action_wrapper<"initcancel"_n, &Orders::initcancel>;
    using delaycancel_action = action_wrapper<"delaycancel"_n, &Orders::delaycancel>;

  private:
    order_table _orders;
    Users::user_table _users;
};