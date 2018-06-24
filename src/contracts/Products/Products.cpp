#include "Products.hpp"

namespace rideEOS {

    void Products::add(account_name account, string& title, string& description, uint64_t price, bool available){
        require_auth(account);
        productIndex products(_self, _self);

        products.emplace(account, [&](auto& product) {
            product.productKey = products.available_primary_key();
            product.title = title;
            product.description = description;
            product.price = price;
            product.available = available;
            product.userKey = account;
        });
    }

    void Products::update(account_name account, uint64_t productKey, string& description, uint64_t price, bool available){
        require_auth(account);
        productIndex products(_self, _self);

        auto iterator = products.find(productKey);
        eosio_assert(iterator != products.end(), "Address for product not found");

        products.modify(iterator, account, [&](auto& product) {
            product.description = description;
            product.price = price;
            product.available = available;
        });
    }

    void Products::getproduct(const uint64_t productKey) {
        productIndex products(_self, _self);

        auto iterator = products.find(productKey);
        eosio_assert(iterator != products.end(), "Address for product not found");

        auto currentProduct = products.get(productKey);
        print("=== Product === ");
        print("- Product Key : ", currentProduct.productKey);
        print("- Title : ", currentProduct.title.c_str());
        print("- Descri : ", currentProduct.description.c_str());
        print("- Available : ", currentProduct.available);
        print("- Owner Key : ", currentProduct.userKey);

    }
}