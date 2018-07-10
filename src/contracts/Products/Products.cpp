#include "Products.hpp"

namespace rideEOS {

    EOSIO_ABI(Products, (add)(update)(getprodbyid)(getprodbyusr));

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

    void Products::getprodbyusr(const account_name account){
        productIndex products(_self, _self);

        auto productsUser =products.get_index<N(byuserkey)>();

        print("=== Product === ");

        for (const auto& product : productsUser ) {
            print("- Product Key : ", product.productKey);
            print("- Title : ", product.title.c_str());
            print("- Descri : ", product.description.c_str());
            print("- Price : ", product.price);
            print("- Available : ", product.available);
            print("- Owner Key : ", product.userKey);
        }
    }

    void Products::getprodbyid(const uint64_t productKey) {
        productIndex products(_self, _self);

        auto iterator = products.find(productKey);
        eosio_assert(iterator != products.end(), "Address for product not found");

        auto currentProduct = products.get(productKey);
        print("=== Product === ");
        print("- Product Key : ", currentProduct.productKey);
        print("- Title : ", currentProduct.title.c_str());
        print("- Descri : ", currentProduct.description.c_str());
        print("- Price : ", currentProduct.price);
        print("- Available : ", currentProduct.available);
        print("- Owner Key : ", currentProduct.userKey);
    }
}