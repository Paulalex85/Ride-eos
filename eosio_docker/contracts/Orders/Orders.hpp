#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/contract.hpp>
#include <string>

using namespace eosio;
namespace rideEOS
{

using namespace eosio;
using eosio::asset;
using eosio::key256;
using std::string;

CONTRACT Orders : public eosio::contract
{
    using contract::contract;

  public:
    Orders(name self) : contract(self) {}

    //@abi action
    void needdeliver(name buyer, name seller, asset & priceOrder, asset & priceDeliver, string & details, uint64_t delay);

    //@abi action
    void deliverfound(name deliver, uint64_t orderKey);

    //@abi action
    void initialize(name buyer, name seller, name deliver, asset & priceOrder, asset & priceDeliver, string & details, uint64_t delay);

    //@abi action
    void validatebuy(uint64_t orderKey, const checksum256 &commitment);

    //@abi action
    void validatedeli(uint64_t orderKey);

    //@abi action
    void validatesell(uint64_t orderKey, const checksum256 &commitment);

    //@abi action
    void orderready(uint64_t orderKey);

    //@abi action
    void ordertaken(uint64_t orderKey, const checksum256 &source);

    //@abi action
    void orderdelive(uint64_t orderKey, const checksum256 &source);

    //@abi action
    void initcancel(uint64_t orderKey, name account);

    //@abi action
    void delaycancel(uint64_t orderKey);

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

  private:
    //@abi table order i64
    TABLE order
    {
        uint64_t orderKey;
        name buyer;
        name seller;
        name deliver;
        uint8_t state;
        eosio::time_point_sec date;
        eosio::time_point_sec dateDelay;
        checksum256 takeverification;
        checksum256 deliveryverification;
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

        static key256 get_commitment(const checksum256 &commitment)
        {
            const uint64_t *p64 = reinterpret_cast<const uint64_t *>(&commitment);
            return key256::make_from_word_sequence<uint64_t>(p64[0], p64[1], p64[2], p64[3]);
        }

        EOSLIB_SERIALIZE(order, (orderKey)(buyer)(seller)(deliver)(state)(date)(dateDelay)(takeverification)(deliveryverification)(priceOrder)(priceDeliver)(validateBuyer)(validateSeller)(validateDeliver)(details)(delay))
    };

    typedef multi_index<name("order"), order,
                        indexed_by<name("bybuyerkey"),
                                   const_mem_fun<order, uint64_t, &order::get_buyer_key>>,
                        indexed_by<name("bysellerkey"),
                                   const_mem_fun<order, uint64_t, &order::get_seller_key>>,
                        indexed_by<name("bydeliverkey"),
                                   const_mem_fun<order, uint64_t, &order::get_deliver_key>>>
        orderIndex;
};
} // namespace rideEOS
