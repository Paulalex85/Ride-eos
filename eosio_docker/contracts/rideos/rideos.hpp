#include <eosio/eosio.hpp>
#include <eosio/crypto.hpp>
#include <eosio/asset.hpp>
#include <eosio/time.hpp>
#include <eosio/system.hpp>

using namespace eosio;

using std::string;

CONTRACT rideos : public eosio::contract
{
    using contract::contract;

public:
    // constructor
    rideos(name receiver, name code, datastream<const char *> ds) : contract(receiver, code, ds),
                                                                    _orders(receiver, receiver.value) {}

    uint32_t now()
    {
        return (uint32_t)(eosio::current_time_point().sec_since_epoch());
    }

    void deposit(const name account, const asset &quantity);

    void withdraw(const name account, const asset &quantity);

    ACTION initialize(const name buyer, const name seller, const name deliver, const asset &priceOrder, const asset &priceDeliver, const string &details, const uint64_t delay);

    ACTION validatebuy(const uint64_t orderKey, const checksum256 &nonce, const checksum256 &hash);

    ACTION validatedeli(const uint64_t orderKey);

    ACTION validatesell(const uint64_t orderKey, const checksum256 &nonce, const checksum256 &hash);

    ACTION orderready(const uint64_t orderKey);

    ACTION ordertaken(const uint64_t orderKey, const string &source);

    ACTION orderdelive(const uint64_t orderKey, const string &source);

    ACTION initcancel(const uint64_t orderKey, const name account);

    ACTION delaycancel(const uint64_t orderKey);

    ACTION deleteorder(const uint64_t orderKey);

    enum order_state : uint8_t
    {
        NEED_DELIVER = 0,
        INITIALIZATION = 1,
        ORDER_VALIDATE = 2,
        ORDER_PREPARED = 3,
        ORDER_TAKED = 4,
        ORDER_DELIVERED = 5,
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
        checksum256 takeverification;
        checksum256 deliveryverification;
        checksum256 nonceSeller;
        checksum256 nonceBuyer;
        asset priceOrder;
        asset priceDeliver;
        bool validateBuyer;
        bool validateSeller;
        bool validateDeliver;
        string details;

        uint64_t primary_key() const { return orderKey; }
        uint64_t get_buyer_key() const { return buyer.value; }
        uint64_t get_seller_key() const { return seller.value; }
        uint64_t get_deliver_key() const { return deliver.value; }

        static fixed_bytes<32> checksum256_to_sha256(const checksum256 &hash)
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

private:
    order_table _orders;
};