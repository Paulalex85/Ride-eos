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
using eosio::action;
using eosio::asset;
using std::string;

CONTRACT Market : public eosio::contract
{
    using contract::contract;

  public:
    Market(name self) : contract(self) {}

    //@abi action
    void addplace(string & country, string & zipCode);

    //@abi action
    void updateplace(uint64_t key, string & country, string & zipCode);

    //@abi action
    void deleteplace(uint64_t key);

    //@abi action
    void newassign(name account, uint64_t placeKey);

    //@abi action
    void endassign(uint64_t assignmentKey);

    //@abi action
    void addoffer(uint64_t orderKey, uint64_t placeKey);

    //@abi action
    void endoffer(uint64_t offerKey);

    //@abi action
    void canceloffer(uint64_t offerKey);

    //@abi action
    void addapply(name account, uint64_t offerKey);

    //@abi action
    void cancelapply(uint64_t applyKey);

    //@abi table place i64
    TABLE place
    {
        uint64_t placeKey;
        string country;
        string zipCode;

        uint64_t primary_key() const { return placeKey; }

        EOSLIB_SERIALIZE(place, (placeKey)(country)(zipCode))
    };
    typedef multi_index<name("place"), place> placeIndex;

    //@abi table assignment i64
    TABLE assignment
    {
        uint64_t assignmentKey;
        uint64_t placeKey;
        name account;
        eosio::time_point_sec endAssignment;

        uint64_t primary_key() const { return assignmentKey; }
        uint64_t get_account() const { return account.value; }
        uint64_t get_place_key() const { return placeKey; }

        EOSLIB_SERIALIZE(assignment, (assignmentKey)(placeKey)(account)(endAssignment))
    };
    typedef multi_index<name("assignment"), assignment,
                        indexed_by<name("byuserkey"),
                                   const_mem_fun<assignment, uint64_t, &assignment::get_account>>,
                        indexed_by<name("byplacekey"),
                                   const_mem_fun<assignment, uint64_t, &assignment::get_place_key>>>
        assignmentIndex;

    enum offer_state : uint8_t
    {
        OPEN = 0,
        CLOSED = 1,
        FOUNDED = 2,
    };

    //@abi table offer i64
    TABLE offer
    {
        uint64_t offerKey;
        uint64_t orderKey;
        uint64_t placeKey;
        uint8_t stateOffer;

        uint64_t primary_key() const { return offerKey; }
        uint64_t getOrderKey() const { return orderKey; }
        uint64_t getPlaceKey() const { return placeKey; }

        EOSLIB_SERIALIZE(offer, (offerKey)(orderKey)(placeKey)(stateOffer))
    };
    typedef multi_index<name("offer"), offer,
                        indexed_by<name("byorderkey"),
                                   const_mem_fun<offer, uint64_t, &offer::getOrderKey>>,
                        indexed_by<name("byplacekey"),
                                   const_mem_fun<offer, uint64_t, &offer::getPlaceKey>>>
        offerIndex;

    //@abi table apply i64
    TABLE apply
    {
        uint64_t applyKey;
        name deliver;
        uint64_t offerKey;

        uint64_t primary_key() const { return applyKey; }
        uint64_t get_offer() const { return offerKey; }

        EOSLIB_SERIALIZE(apply, (applyKey)(deliver)(offerKey))
    };
    typedef multi_index<name("apply"), apply,
                        indexed_by<name("byoffer"),
                                   const_mem_fun<apply, uint64_t, &apply::get_offer>>>
        applyIndex;
};
} // namespace rideEOS
