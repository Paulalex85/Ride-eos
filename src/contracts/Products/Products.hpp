#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <string>

using namespace eosio;
namespace rideEOS {

    using namespace eosio;
    using std::string;

    class Products : public contract{
        using contract::contract;

    public:
        Products(account_name self):contract(self) {}

        //@abi action
        void add(account_name account, string& title, string& description, uint64_t price, bool available);

        //@abi action
        void update(account_name account,uint64_t productKey, string& description, uint64_t price, bool available);

        //@abi action
        void getproduct(const uint64_t productKey);

        //@abi table product i64
        struct product {
            uint64_t productKey;
            string title;
            string description;
            uint64_t price;
            bool available;
            account_name userKey;

            uint64_t primary_key() const { return productKey; }

            EOSLIB_SERIALIZE(product, (productKey)(title)(description)(price)(available)(userKey))
        };

        typedef multi_index<N(productIndex), product,
                indexed_by < N( byuserkey ), const_mem_fun <product, account_name, &product::userKey> >
        > productIndex;
    };

    EOSIO_ABI(Products, (add)(update)(getproduct));
}
