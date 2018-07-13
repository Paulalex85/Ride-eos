#include "Orders.hpp"
#include "../Products/Products.hpp"

namespace rideEOS {

    EOSIO_ABI(Orders, (initialize)(addinkart)(deleteinkart)(getorder)(getorderbybu));

    void Orders::initialize(account_name buyer, account_name seller, account_name deliver) {
        require_auth(buyer);
        orderIndex orders(_self,_self);

        orders.emplace(buyer, [&](auto& order) {
            order.orderKey = orders.available_primary_key();
            order.buyer = buyer;
            order.seller = seller;
            order.deliver = deliver;
            order.statut = 1;
            order.date = 0; //TODO set current date
        });
    }

    void Orders::getorderbybu(const account_name buyer) {
        orderIndex orders(_self, _self);

        auto ordersBuyer = orders.get_index<N(bybuyerkey)>();

        print("=== Order === ");

        for (const auto& order : ordersBuyer ) {
            print("- Order Key : ", order.orderKey);
            print("- Buyer Key : ", order.buyer);
            print("- Seller Key : ", order.seller);
            print("- Deliver Key : ", order.deliver);
            print("- Statut : ", order.statut);
            print("- Date : ", order.date);
            print("- Kart : ");

            for (const auto& kart : order.karts ) {
                print("      ProductKey : ", kart.productKey);
                print("      Quantity : ", kart.quantity);
                print("      Price : ", kart.price);
                print("________________________________");
            }
        }
    }

    void Orders::getorder(const uint64_t orderKey) {
        orderIndex orders(_self, _self);

        auto iterator = orders.find(orderKey);
        eosio_assert(iterator != orders.end(), "Address for order not found");

        auto currentOrder = orders.get(orderKey);
        print("=== Order === ");
        print("- Order Key : ", currentOrder.orderKey);
        print("- Buyer Key : ", currentOrder.buyer);
        print("- Seller Key : ", currentOrder.seller);
        print("- Deliver Key : ", currentOrder.deliver);
        print("- Statut : ", currentOrder.statut);
        print("- Date : ", currentOrder.date);
        print("- Kart : ");

        for (const auto& kart : currentOrder.karts ) {
            print("      ProductKey : ", kart.productKey);
            print("      Quantity : ", kart.quantity);
            print("      Price : ", kart.price);
            print("________________________________");
        }
    }

    void Orders::addinkart(uint64_t orderKey, account_name buyer,account_name seller,uint64_t productKey, uint64_t quantity) {
        require_auth(buyer);

        orderIndex orders(_self,_self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        Products::productIndex products(seller, seller);
        auto iteratorProduct = products.find(productKey);
        eosio_assert(iteratorProduct != products.end(), "Address for product not found");

        eosio_assert(iteratorOrder->get_seller_key() == iteratorProduct->get_user_key(),
                     "The owner product is not the seller of the order");

        eosio_assert(iteratorProduct->available == true, "The product is not available");

        orders.modify(iteratorOrder, buyer, [&](auto& order) {
            order.karts.push_back(kart{
                productKey,
                quantity,
                iteratorProduct->price
            });
        });
    }

    void Orders::deleteinkart(uint64_t orderKey, account_name buyer, uint64_t productKey) {
        require_auth(buyer);

        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        eosio_assert(!iteratorOrder->karts.empty(), "No element in kart");

        auto iteratorKart = iteratorOrder->karts.begin();

        while(iteratorKart != iteratorOrder->karts.end()){
            if(iteratorKart->productKey == productKey){
                break;
            }
            ++iteratorKart;
        }

        eosio_assert(iteratorKart != iteratorOrder->karts.end(), "Product not found in kart");

        orders.modify(iteratorOrder, buyer, [&](auto& order) {
            order.karts.erase(iteratorKart);
        });
    }
}