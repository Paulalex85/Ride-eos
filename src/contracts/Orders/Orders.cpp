#include "Orders.hpp"
#include "../Products/Products.hpp"

namespace rideEOS {

    EOSIO_ABI(Orders, (initialize)(addinkart)(deleteinkart)(getorder)(getorderbybu)
    (validateinit)(validatedeli)(validatesell)(productready)(ordertaken)(orderdelive));

    bool Orders::isinkart(const vector<rideEOS::Orders::kart> current, const uint64_t &productKey) {
        bool isin = false;

        for (int i = 0; i < current.size(); ++i) {
            if(current.at(i).productKey == productKey){
                isin = true;
                break;
            }
        }
        return isin;
    }

    void Orders::initialize(account_name buyer, account_name seller, account_name deliver) {
        require_auth(buyer);
        orderIndex orders(_self,_self);

        orders.emplace(buyer, [&](auto& order) {
            order.orderKey = orders.available_primary_key();
            order.buyer = buyer;
            order.seller = seller;
            order.deliver = deliver;
            order.state = 0;
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
            print("- Statut : ", order.state);
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
        print("- Statut : ", currentOrder.state);
        print("- Date : ", currentOrder.date);
        print("- Kart : ");

        for (const auto& kart : currentOrder.karts ) {
            print("      ProductKey : ", kart.productKey);
            print("      Quantity : ", kart.quantity);
            print("      Price : ", kart.price);
            print("________________________________");
        }
    }

    void Orders::addinkart(uint64_t orderKey, uint64_t productKey, uint64_t quantity) {
        orderIndex orders(_self,_self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->buyer);

        Products::productIndex products(iteratorOrder->seller, iteratorOrder->seller);
        auto iteratorProduct = products.find(productKey);
        eosio_assert(iteratorProduct != products.end(), "Address for product not found");

        eosio_assert(iteratorOrder->get_seller_key() == iteratorProduct->get_user_key(),
                     "The owner product is not the seller of the order");

        eosio_assert(iteratorProduct->available == true, "The product is not available");

        eosio_assert(quantity > 0, "The quantity should be more than 0");

        eosio_assert(isinkart(iteratorOrder->karts, iteratorProduct->productKey), "The product is already in the kart");

        eosio_assert(iteratorOrder->state == 0, "The order is not in the state of initialization");

        orders.modify(iteratorOrder, iteratorOrder->buyer, [&](auto& order) {
            order.karts.push_back(kart{
                productKey,
                quantity,
                iteratorProduct->price
            });
        });
    }

    void Orders::deleteinkart(uint64_t orderKey, uint64_t productKey) {
        

        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->buyer);

        eosio_assert(!iteratorOrder->karts.empty(), "No element in kart");

        eosio_assert(iteratorOrder->state == 0, "The order is not in the state of initialization");

        auto iteratorKart = iteratorOrder->karts.begin();

        while(iteratorKart != iteratorOrder->karts.end()){
            if(iteratorKart->productKey == productKey){
                break;
            }
            ++iteratorKart;
        }

        eosio_assert(iteratorKart != iteratorOrder->karts.end(), "Product not found in kart");

        orders.modify(iteratorOrder, iteratorOrder->buyer, [&](auto& order) {
            order.karts.erase(iteratorKart);
        });
    }

    void Orders::validateinit(uint64_t orderKey, const checksum256& commitment) {
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->buyer);

        eosio_assert(!iteratorOrder->karts.empty(), "No element in kart");

        eosio_assert(iteratorOrder->state == 0, "The order is not in the state of initialization");

        orders.modify(iteratorOrder, iteratorOrder->buyer, [&](auto& order) {
            order.state = 1;
            order.deliveryverification = commitment;
        });
    }

    void Orders::validatedeli(uint64_t orderKey){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->deliver);

        eosio_assert(iteratorOrder->state == 1, "The order is not in the state of waiting deliver");

        orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto& order) {
            order.state = 2;
        });
    }

    void Orders::validatesell(uint64_t orderKey, const checksum256& commitment){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->seller);

        eosio_assert(iteratorOrder->state == 2, "The order is not in the state of waiting seller");

        orders.modify(iteratorOrder, iteratorOrder->seller, [&](auto& order) {
            order.state = 3;
            order.takeverification = commitment;
        });
    }

    void Orders::productready(uint64_t orderKey){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->seller);

        eosio_assert(iteratorOrder->state == 3, "The order is not in the state of product ready");

        orders.modify(iteratorOrder, iteratorOrder->seller, [&](auto& order) {
            order.state = 4;
        });
    }

    void Orders::ordertaken(uint64_t ,const checksum256& source){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->deliver);

        eosio_assert(
            assert_sha256((char *)&source, sizeof(source), (const checksum256 *)&iteratorOrder->takeverification),
            "The source key is invalid");

        eosio_assert(iteratorOrder->state == 4, "The order is not in the state of waiting deliver");

        orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto& order) {
            order.state = 5;
        });
    }

    void Orders::orderdelive(uint64_t ,const checksum256& source){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->deliver);

        eosio_assert(
            assert_sha256((char *)&source, sizeof(source), (const checksum256 *)&iteratorOrder->deliveryverification),
            "The source key is invalid");

        eosio_assert(iteratorOrder->state == 5, "The order is not in the state delivery");

        orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto& order) {
            order.state = 6;
        });
    }

}