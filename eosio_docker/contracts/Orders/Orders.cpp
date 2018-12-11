#include "Orders.hpp"
using namespace eosio;

bool is_equal(const capi_checksum256 &a, const capi_checksum256 &b)
{
    return memcmp((void *)&a, (const void *)&b, sizeof(capi_checksum256)) == 0;
}

bool is_zero(const capi_checksum256 &a)
{
    const uint64_t *p64 = reinterpret_cast<const uint64_t *>(&a);
    return p64[0] == 0 && p64[1] == 0 && p64[2] == 0 && p64[3] == 0;
}

bool is_actor(name sender, name buyer, name seller, name deliver)
{
    if (sender.value == buyer.value || sender.value == seller.value || sender.value == deliver.value)
    {
        return true;
    }
    return false;
}

ACTION Orders::needdeliver(name buyer, name seller, asset &priceOrder, asset &priceDeliver,
                           std::string &details, uint64_t delay)
{
    eosio_assert(priceOrder.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    eosio_assert(priceOrder.is_valid(), "invalid bet");
    eosio_assert(priceOrder.amount > 0, "must bet positive quantity");

    eosio_assert(priceDeliver.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    eosio_assert(priceDeliver.is_valid(), "invalid bet");
    eosio_assert(priceDeliver.amount > 0, "must bet positive quantity");

    auto iteratorUser = _users.find(buyer.value);
    eosio_assert(iteratorUser != _users.end(), "Buyer not found");

    iteratorUser = _users.find(seller.value);
    eosio_assert(iteratorUser != _users.end(), "Seller not found");

    _orders.emplace(_self, [&](auto &order) {
        order.orderKey = _orders.available_primary_key();
        order.buyer = buyer;
        order.seller = seller;
        order.state = NEED_DELIVER;
        order.date = time_point_sec(now());
        order.dateDelay = time_point_sec(now());
        order.priceOrder = priceOrder;
        order.priceDeliver = priceDeliver;
        order.validateBuyer = false;
        order.validateSeller = false;
        order.validateDeliver = false;
        order.details = details;
        order.delay = delay;
    });
}

ACTION Orders::deliverfound(name deliver, uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    auto iteratorUser = _users.find(deliver.value);
    eosio_assert(iteratorUser != _users.end(), "Deliver not found");

    eosio_assert(iteratorOrder->state == NEED_DELIVER, "Should be at the state Need deliver");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = INITIALIZATION;
        order.deliver = deliver;
    });
}

ACTION Orders::initialize(name buyer, name seller, name deliver, asset &priceOrder,
                          asset &priceDeliver, string &details, uint64_t delay)
{
    eosio_assert(priceOrder.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    eosio_assert(priceOrder.is_valid(), "invalid bet");
    eosio_assert(priceOrder.amount > 0, "must bet positive quantity");

    eosio_assert(priceDeliver.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    eosio_assert(priceDeliver.is_valid(), "invalid bet");
    eosio_assert(priceDeliver.amount > 0, "must bet positive quantity");

    auto iteratorUser = _users.find(buyer.value);
    eosio_assert(iteratorUser != _users.end(), "Buyer not found");

    iteratorUser = _users.find(seller.value);
    eosio_assert(iteratorUser != _users.end(), "Seller not found");

    iteratorUser = _users.find(deliver.value);
    eosio_assert(iteratorUser != _users.end(), "Deliver not found");

    _orders.emplace(_self, [&](auto &order) {
        order.orderKey = _orders.available_primary_key();
        order.buyer = buyer;
        order.seller = seller;
        order.deliver = deliver;
        order.state = INITIALIZATION;
        order.date = time_point_sec(now());
        order.dateDelay = time_point_sec(now());
        order.priceOrder = priceOrder;
        order.priceDeliver = priceDeliver;
        order.validateBuyer = false;
        order.validateSeller = false;
        order.validateDeliver = false;
        order.details = details;
        order.delay = delay;
    });
}

ACTION Orders::validatebuy(uint64_t orderKey, const capi_checksum256 &hash)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    auto iteratorUser = _users.find(iteratorOrder->buyer.value);
    eosio_assert(iteratorUser != _users.end(), "Buyer not found");

    eosio_assert(iteratorOrder->validateBuyer == false, "Buyer already validate");

    eosio_assert(iteratorUser->balance >= iteratorOrder->priceOrder + iteratorOrder->priceDeliver, "insufficient balance");
    action(
        permission_level{iteratorOrder->buyer, name("active")},
        name("rideos"), name("pay"),
        std::make_tuple(iteratorOrder->buyer, _self, iteratorOrder->priceOrder + iteratorOrder->priceDeliver))
        .send();

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.validateBuyer = true;
        order.deliveryverification = hash;

        if (iteratorOrder->validateSeller && iteratorOrder->validateDeliver)
        {
            order.state = ORDER_READY;
            order.dateDelay = eosio::time_point_sec(now() + iteratorOrder->delay);
        }
    });
}

ACTION Orders::validatedeli(uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    eosio_assert(iteratorOrder->validateDeliver == false, "Deliver already validate");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.validateDeliver = true;

        if (iteratorOrder->validateSeller && iteratorOrder->validateBuyer)
        {
            order.state = ORDER_READY;
            order.dateDelay = eosio::time_point_sec(now() + iteratorOrder->delay);
        }
    });
}

ACTION Orders::validatesell(uint64_t orderKey, const capi_checksum256 &hash)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    eosio_assert(iteratorOrder->validateSeller == false, "Seller already validate");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.validateSeller = true;
        order.takeverification = hash;

        if (iteratorOrder->validateDeliver && iteratorOrder->validateBuyer)
        {
            order.state = ORDER_READY;
            order.dateDelay = eosio::time_point_sec(now() + iteratorOrder->delay);
        }
    });
}

ACTION Orders::orderready(uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    eosio_assert(iteratorOrder->state == ORDER_READY, "The order is not in the state of product ready");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_TAKEN;
    });
}

ACTION Orders::ordertaken(uint64_t orderKey, const capi_checksum256 &source)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)&source, sizeof(source), (const capi_checksum256 *)&iteratorOrder->takeverification);

    eosio_assert(iteratorOrder->state == ORDER_TAKEN, "The order is not in the state of waiting deliver");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_DELIVERED;
    });
}

ACTION Orders::orderdelive(uint64_t orderKey, const capi_checksum256 &source)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)&source, sizeof(source), (const capi_checksum256 *)&iteratorOrder->deliveryverification);

    eosio_assert(iteratorOrder->state == ORDER_DELIVERED, "The order is not in the state delivery");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_END;
    });

    action(
        permission_level{_self, name("active")},
        name("eosio.token"), name("transfer"),
        std::make_tuple(_self, name("rideos"), iteratorOrder->priceOrder + iteratorOrder->priceDeliver, std::string("")))
        .send();

    action(
        permission_level{_self, name("active")},
        name("rideos"), name("receive"),
        std::make_tuple(iteratorOrder->seller, _self, iteratorOrder->priceOrder))
        .send();

    action(
        permission_level{_self, name("active")},
        name("rideos"), name("receive"),
        std::make_tuple(iteratorOrder->deliver, _self, iteratorOrder->priceDeliver))
        .send();
}

ACTION Orders::initcancel(uint64_t orderKey, name account)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(account);

    eosio_assert(is_actor(account, iteratorOrder->buyer, iteratorOrder->seller, iteratorOrder->deliver), "The sender is not in the contract");

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    if (iteratorOrder->validateBuyer)
    {
        action(
            permission_level{_self, name("active")},
            name("eosio.token"), name("transfer"),
            std::make_tuple(_self, name("rideos"), iteratorOrder->priceOrder + iteratorOrder->priceDeliver, std::string("")))
            .send();

        action(
            permission_level{_self, name("active")},
            name("rideos"), name("receive"),
            std::make_tuple(iteratorOrder->buyer, _self, iteratorOrder->priceOrder + iteratorOrder->priceDeliver))
            .send();
    }

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = INIT_CANCEL;
    });
}

ACTION Orders::delaycancel(uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state > INITIALIZATION, "The order is in the state of initialization");
    eosio_assert(iteratorOrder->state < ORDER_END, "The order is finish");

    eosio_assert(iteratorOrder->dateDelay < eosio::time_point_sec(now()), "The delay for cancel the order is not passed");

    action(
        permission_level{_self, name("active")},
        name("eosio.token"), name("transfer"),
        std::make_tuple(_self, name("rideos"), iteratorOrder->priceOrder + iteratorOrder->priceDeliver, std::string("")))
        .send();

    action(
        permission_level{_self, name("active")},
        name("rideos"), name("receive"),
        std::make_tuple(iteratorOrder->buyer, _self, iteratorOrder->priceOrder + iteratorOrder->priceDeliver))
        .send();

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_CANCEL;
    });
}
EOSIO_DISPATCH(Orders, (needdeliver)(deliverfound)(initialize)(validatebuy)(validatedeli)(validatesell)(orderready)(ordertaken)(orderdelive)(initcancel)(delaycancel));