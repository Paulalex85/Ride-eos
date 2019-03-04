#include <eosiolib/eosio.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/time.hpp>

using namespace eosio;

using std::string;

CONTRACT rideos : public eosio::contract
{
    using contract::contract;

  public:
    // constructor
    rideos(name receiver, name code, datastream<const char *> ds) : contract(receiver, code, ds),
                                                                    _users(receiver, receiver.value),
                                                                    _stackpower(receiver, receiver.value),
                                                                    _orders(receiver, receiver.value),
                                                                    _offers(receiver, receiver.value),
                                                                    _applies(receiver, receiver.value) {}

    void find_stackpower_and_increase(const name account, const asset &quantity);

    ACTION adduser(const name account, const string &username);

    ACTION updateuser(const name account, const string &username);

    ACTION deposit(const name account, const asset &quantity);

    ACTION withdraw(const name account, const asset &quantity);

    ACTION pay(const name account, const asset &quantity);

    ACTION receive(const name account, const name from, const asset &quantity);

    ACTION stackpow(const name account, const asset &quantity);

    ACTION unlockpow(const name account, const asset &quantity, const uint64_t stackKey);

    ACTION unstackpow(const name account, const uint64_t stackKey);

    ACTION needdeliver(const name buyer, const name seller, const asset &priceOrder, const asset &priceDeliver, const string &details, const uint64_t delay);

    ACTION deliverfound(const name deliver, const uint64_t orderKey);

    ACTION initialize(const name buyer, const name seller, const name deliver, const asset &priceOrder, const asset &priceDeliver, const string &details, const uint64_t delay);

    ACTION validatebuy(const uint64_t orderKey, const capi_checksum256 &hash);

    ACTION validatedeli(const uint64_t orderKey, const uint64_t stackKey);

    ACTION validatesell(const uint64_t orderKey, const capi_checksum256 &hash, const uint64_t stackKey);

    ACTION orderready(const uint64_t orderKey);

    ACTION ordertaken(const uint64_t orderKey, const capi_checksum256 &source);

    ACTION orderdelive(const uint64_t orderKey, const capi_checksum256 &source);

    ACTION initcancel(const uint64_t orderKey, const name account);

    ACTION delaycancel(const uint64_t orderKey);

    ACTION addoffer(const uint64_t orderKey);

    ACTION endoffer(const name deliver, const uint64_t offerKey);

    ACTION canceloffer(const uint64_t offerKey);

    ACTION addapply(const name account, const uint64_t offerKey);

    ACTION cancelapply(const uint64_t applyKey);

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
        uint64_t stackKey;
        name account;
        asset balance;
        time_point_sec endAssignment;

        uint64_t primary_key() const { return stackKey; }
        uint64_t get_account() const { return account.value; }
    };
    typedef multi_index<name("stackpower"), stackpower,
                        indexed_by<name("byaccount"),
                                   const_mem_fun<stackpower, uint64_t, &stackpower::get_account>>>
        stackpower_table;

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

    enum offer_state : uint8_t
    {
        OPEN = 0,
        CLOSED = 1,
        FOUNDED = 2,
    };

    TABLE offer
    {
        uint64_t offerKey;
        uint64_t orderKey;
        uint8_t stateOffer;

        uint64_t primary_key() const { return offerKey; }
        uint64_t getOrderKey() const { return orderKey; }
    };
    typedef multi_index<name("offer"), offer,
                        indexed_by<name("byorderkey"),
                                   const_mem_fun<offer, uint64_t, &offer::getOrderKey>>>
        offer_table;

    TABLE apply
    {
        uint64_t applyKey;
        name deliver;
        uint64_t offerKey;

        uint64_t primary_key() const { return applyKey; }
        uint64_t get_offer() const { return offerKey; }
    };
    typedef multi_index<name("apply"), apply,
                        indexed_by<name("byoffer"),
                                   const_mem_fun<apply, uint64_t, &apply::get_offer>>>
        apply_table;

  private:
    user_table _users;
    stackpower_table _stackpower;
    order_table _orders;
    offer_table _offers;
    apply_table _applies;
};