#include "Orders.hpp"
#include "../Users/Users.hpp"

namespace rideEOS {

    EOSIO_ABI(Orders, (initialize)(getorder)(getorderbybu)(validateinit)(validatedeli)(validatesell)(productready)(ordertaken)(orderdelive)(ordercancel));

    bool is_equal(const checksum256& a, const checksum256& b) {
        return memcmp((void *)&a, (const void *)&b, sizeof(checksum256)) == 0;
    }

    bool is_zero(const checksum256& a) {
        const uint64_t *p64 = reinterpret_cast<const uint64_t*>(&a);
        return p64[0] == 0 && p64[1] == 0 && p64[2] == 0 && p64[3] == 0;
    }

    void Orders::initialize(account_name buyer, account_name seller, account_name deliver) {
        require_auth(buyer);
        orderIndex orders(_self,_self);

        Users::userIndex userBuyer(N(rideos), N(rideos));
        auto iteratorUser = userBuyer.find(buyer);
        eosio_assert(iteratorUser != userBuyer.end(), "Buyer not found");

        Users::userIndex userSeller(N(rideos), N(rideos));
        iteratorUser = userSeller.find(seller);
        eosio_assert(iteratorUser != userSeller.end(), "Seller not found");

        Users::userIndex userDeliver(N(rideos), N(rideos));
        iteratorUser = userDeliver.find(deliver);
        eosio_assert(iteratorUser != userDeliver.end(), "Deliver not found");

        orders.emplace(buyer, [&](auto& order) {
            order.orderKey = orders.available_primary_key();
            order.buyer = buyer;
            order.seller = seller;
            order.deliver = deliver;
            order.state = 0;
            order.date = eosio::time_point_sec(now());
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
            print("- Date : ", order.date.utc_seconds);
        }
    }

    void Orders::getorder(const uint64_t orderKey) {
        orderIndex orders(_self, _self);

        auto iterator = orders.find(orderKey);
        eosio_assert(iterator != orders.end(), "Address for order not found");

        auto currentOrder = orders.get(orderKey);
        print("=== Order === \n");
        print("- Order Key : ", currentOrder.orderKey, "\n");
        print("- Buyer Key : ", currentOrder.buyer, "\n");
        print("- Seller Key : ", currentOrder.seller, "\n");
        print("- Deliver Key : ", currentOrder.deliver, "\n");
        print("- Statut : ", currentOrder.state, "\n");
        print("- Date : ", currentOrder.date.utc_seconds, "\n");
    }

    void Orders::validateinit(uint64_t orderKey, const checksum256& commitment) {
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->buyer);

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

    void Orders::ordertaken(uint64_t orderKey,const checksum256& source){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->deliver);

        assert_sha256((char *)&source, sizeof(source), (const checksum256 *)&iteratorOrder->takeverification);

        eosio_assert(iteratorOrder->state == 4, "The order is not in the state of waiting deliver");

        orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto& order) {
            order.state = 5;
        });
    }

    void Orders::orderdelive(uint64_t orderKey,const checksum256& source){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->deliver);

        assert_sha256((char *)&source, sizeof(source),(const checksum256 *)&iteratorOrder->deliveryverification);

        eosio_assert(iteratorOrder->state == 5, "The order is not in the state delivery");

        orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto& order) {
            order.state = 6;
        });
    }

    void Orders::ordercancel(uint64_t orderKey,const checksum256& source){
        orderIndex orders(_self, _self);
        auto iteratorOrder = orders.find(orderKey);
        eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

        require_auth(iteratorOrder->buyer);

        assert_sha256((char *)&source, sizeof(source), (const checksum256 *)&iteratorOrder->deliveryverification);

        eosio_assert(iteratorOrder->state == 5, "The order is not in the state delivery");

        if(iteratorOrder->state <= 4){
            orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto& order) {
                order.state = 8;
                //TODO asset handle
            });
            //TODO 100% asset
        }
        else if(iteratorOrder->state == 5)
        {
            //TODO 0% deliver
        }
        else {
            abort();
        }


    }

}