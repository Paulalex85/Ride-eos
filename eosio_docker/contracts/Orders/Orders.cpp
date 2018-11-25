#include "Orders.hpp"
#include "../Users/Users.hpp"

namespace rideEOS
{

EOSIO_DISPATCH(Orders, (needdeliver)(deliverfound)(initialize)(validatebuy)(validatedeli)(validatesell)(orderready)(ordertaken)(orderdelive)(initcancel)(delaycancel));

bool is_equal(const checksum256 &a, const checksum256 &b)
{
    return memcmp((void *)&a, (const void *)&b, sizeof(checksum256)) == 0;
}

bool is_zero(const checksum256 &a)
{
    const uint64_t *p64 = reinterpret_cast<const uint64_t *>(&a);
    return p64[0] == 0 && p64[1] == 0 && p64[2] == 0 && p64[3] == 0;
}

bool is_actor(name sender, name buyer, name seller, name deliver)
{
    if (sender == buyer || sender == seller || sender == deliver)
    {
        return true;
    }
    return false;
}

void Orders::needdeliver(name buyer, name seller, asset &priceOrder, asset &priceDeliver,
                         std::string &details, uint64_t delay)
{
    orderIndex orders(_self, _self);

    eosio_assert(priceOrder.symbol == CORE_SYMBOL, "only core token allowed");
    eosio_assert(priceOrder.is_valid(), "invalid bet");
    eosio_assert(priceOrder.amount > 0, "must bet positive quantity");

    eosio_assert(priceDeliver.symbol == CORE_SYMBOL, "only core token allowed");
    eosio_assert(priceDeliver.is_valid(), "invalid bet");
    eosio_assert(priceDeliver.amount > 0, "must bet positive quantity");

    Users::userIndex users(N(rideos), N(rideos));
    auto iteratorUser = users.find(buyer);
    eosio_assert(iteratorUser != users.end(), "Buyer not found");

    iteratorUser = users.find(seller);
    eosio_assert(iteratorUser != users.end(), "Seller not found");

    orders.emplace(_self, [&](auto &order) {
        order.orderKey = orders.available_primary_key();
        order.buyer = buyer;
        order.seller = seller;
        order.state = NEED_DELIVER;
        order.date = eosio::time_point_sec(now());
        order.dateDelay = eosio::time_point_sec(now());
        order.priceOrder = priceOrder;
        order.priceDeliver = priceDeliver;
        order.validateBuyer = false;
        order.validateSeller = false;
        order.validateDeliver = false;
        order.details = details;
        order.delay = delay;
    });
}

void Orders::deliverfound(name deliver, uint64_t orderKey)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state == NEED_DELIVER, "Should be at the state Need deliver");

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = INITIALIZATION;
        order.deliver = deliver;
    });
}

void Orders::initialize(name buyer, name seller, name deliver, asset &priceOrder,
                        asset &priceDeliver, string &details, uint64_t delay)
{
    orderIndex orders(_self, _self);

    eosio_assert(priceOrder.symbol == CORE_SYMBOL, "only core token allowed");
    eosio_assert(priceOrder.is_valid(), "invalid bet");
    eosio_assert(priceOrder.amount > 0, "must bet positive quantity");

    eosio_assert(priceDeliver.symbol == CORE_SYMBOL, "only core token allowed");
    eosio_assert(priceDeliver.is_valid(), "invalid bet");
    eosio_assert(priceDeliver.amount > 0, "must bet positive quantity");

    Users::userIndex users(N(rideos), N(rideos));
    auto iteratorUser = users.find(buyer);
    eosio_assert(iteratorUser != users.end(), "Buyer not found");

    iteratorUser = users.find(seller);
    eosio_assert(iteratorUser != users.end(), "Seller not found");

    iteratorUser = users.find(deliver);
    eosio_assert(iteratorUser != users.end(), "Deliver not found");

    orders.emplace(_self, [&](auto &order) {
        order.orderKey = orders.available_primary_key();
        order.buyer = buyer;
        order.seller = seller;
        order.deliver = deliver;
        order.state = INITIALIZATION;
        order.date = eosio::time_point_sec(now());
        order.dateDelay = eosio::time_point_sec(now());
        order.priceOrder = priceOrder;
        order.priceDeliver = priceDeliver;
        order.validateBuyer = false;
        order.validateSeller = false;
        order.validateDeliver = false;
        order.details = details;
        order.delay = delay;
    });
}

void Orders::validatebuy(uint64_t orderKey, const checksum256 &commitment)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    Users::userIndex userBuyer(N(rideos), N(rideos));
    auto iteratorUser = userBuyer.find(iteratorOrder->buyer);
    eosio_assert(iteratorUser != userBuyer.end(), "Buyer not found");

    eosio_assert(iteratorOrder->validateBuyer == false, "Buyer already validate");

    eosio_assert(iteratorUser->balance >= iteratorOrder->priceOrder + iteratorOrder->priceDeliver, "insufficient balance");
    action(
        permission_level{iteratorOrder->buyer, N(active)},
        N(rideos), N(pay),
        std::make_tuple(iteratorOrder->buyer, _self, iteratorOrder->priceOrder + iteratorOrder->priceDeliver))
        .send();

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.validateBuyer = true;
        order.deliveryverification = commitment;

        if (iteratorOrder->validateSeller && iteratorOrder->validateDeliver)
        {
            order.state = ORDER_READY;
            order.dateDelay = eosio::time_point_sec(now() + iteratorOrder->delay);
        }
    });
}

void Orders::validatedeli(uint64_t orderKey)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    eosio_assert(iteratorOrder->validateDeliver == false, "Deliver already validate");

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.validateDeliver = true;

        if (iteratorOrder->validateSeller && iteratorOrder->validateBuyer)
        {
            order.state = ORDER_READY;
            order.dateDelay = eosio::time_point_sec(now() + iteratorOrder->delay);
        }
    });
}

void Orders::validatesell(uint64_t orderKey, const checksum256 &commitment)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    eosio_assert(iteratorOrder->validateSeller == false, "Seller already validate");

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.validateSeller = true;
        order.takeverification = commitment;

        if (iteratorOrder->validateDeliver && iteratorOrder->validateBuyer)
        {
            order.state = ORDER_READY;
            order.dateDelay = eosio::time_point_sec(now() + iteratorOrder->delay);
        }
    });
}

void Orders::orderready(uint64_t orderKey)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    eosio_assert(iteratorOrder->state == ORDER_READY, "The order is not in the state of product ready");

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_TAKEN;
    });
}

void Orders::ordertaken(uint64_t orderKey, const checksum256 &source)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)&source, sizeof(source), (const checksum256 *)&iteratorOrder->takeverification);

    eosio_assert(iteratorOrder->state == ORDER_TAKEN, "The order is not in the state of waiting deliver");

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_DELIVERED;
    });
}

void Orders::orderdelive(uint64_t orderKey, const checksum256 &source)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)&source, sizeof(source), (const checksum256 *)&iteratorOrder->deliveryverification);

    eosio_assert(iteratorOrder->state == ORDER_DELIVERED, "The order is not in the state delivery");

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_END;
    });

    action(
        permission_level{_self, N(active)},
        N(eosio.token), N(transfer),
        std::make_tuple(_self, N(rideos), iteratorOrder->priceOrder + iteratorOrder->priceDeliver, std::string("")))
        .send();

    action(
        permission_level{_self, N(active)},
        N(rideos), N(receive),
        std::make_tuple(iteratorOrder->seller, _self, iteratorOrder->priceOrder))
        .send();

    action(
        permission_level{_self, N(active)},
        N(rideos), N(receive),
        std::make_tuple(iteratorOrder->deliver, _self, iteratorOrder->priceDeliver))
        .send();
}

void Orders::initcancel(uint64_t orderKey, name account)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(account);

    eosio_assert(is_actor(account, iteratorOrder->buyer, iteratorOrder->seller, iteratorOrder->deliver), "The sender is not in the contract");

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    if (iteratorOrder->validateBuyer)
    {
        action(
            permission_level{_self, N(active)},
            N(eosio.token), N(transfer),
            std::make_tuple(_self, N(rideos), iteratorOrder->priceOrder + iteratorOrder->priceDeliver, std::string("")))
            .send();

        action(
            permission_level{_self, N(active)},
            N(rideos), N(receive),
            std::make_tuple(iteratorOrder->buyer, _self, iteratorOrder->priceOrder + iteratorOrder->priceDeliver))
            .send();
    }

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = INIT_CANCEL;
    });
}

void Orders::delaycancel(uint64_t orderKey)
{
    orderIndex orders(_self, _self);
    auto iteratorOrder = orders.find(orderKey);
    eosio_assert(iteratorOrder != orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state > INITIALIZATION, "The order is in the state of initialization");
    eosio_assert(iteratorOrder->state < ORDER_END, "The order is finish");

    eosio_assert(iteratorOrder->dateDelay < eosio::time_point_sec(now()), "The delay for cancel the order is not passed");

    action(
        permission_level{_self, N(active)},
        N(eosio.token), N(transfer),
        std::make_tuple(_self, N(rideos), iteratorOrder->priceOrder + iteratorOrder->priceDeliver, std::string("")))
        .send();

    action(
        permission_level{_self, N(active)},
        N(rideos), N(receive),
        std::make_tuple(iteratorOrder->buyer, _self, iteratorOrder->priceOrder + iteratorOrder->priceDeliver))
        .send();

    orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_CANCEL;
    });
}
} // namespace rideEOS