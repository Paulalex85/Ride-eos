#include "rideos.hpp"
using namespace eosio;

// int DELAY_END_ASSIGN = 86400;
// int DELAY_POWER_NEEDED = 86400;
// Only for testing
int DELAY_END_ASSIGN = 5;
int DELAY_POWER_NEEDED = 5;

bool is_equal(const capi_checksum256 &a, const capi_checksum256 &b)
{
    return memcmp((void *)&a, (const void *)&b, sizeof(capi_checksum256)) == 0;
}

bool is_zero(const capi_checksum256 &a)
{
    const uint64_t *p64 = reinterpret_cast<const uint64_t *>(&a);
    return p64[0] == 0 && p64[1] == 0 && p64[2] == 0 && p64[3] == 0;
}

bool is_actor(const name sender, const name buyer, const name seller, const name deliver)
{
    if (sender.value == buyer.value || sender.value == seller.value || sender.value == deliver.value)
    {
        return true;
    }
    return false;
}

void rideos::deposit(const name account, const asset &quantity)
{
    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must withdraw positive quantity");
    eosio_assert(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    action(
        permission_level{account, name("active")},
        name("eosio.token"),
        name("transfer"),
        std::make_tuple(account, _self, quantity, std::string("")))
        .send();
}

void rideos::withdraw(const name account, const asset &quantity)
{
    eosio_assert(quantity.is_valid(), "invalid quantity");
    eosio_assert(quantity.amount > 0, "must withdraw positive quantity");
    eosio_assert(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    action(
        permission_level{_self, name("active")},
        name("eosio.token"), name("transfer"),
        std::make_tuple(_self, account, quantity, std::string("")))
        .send();
}

void rideos::initialize(const name buyer, const name seller, const name deliver, const asset &priceOrder,
                        const asset &priceDeliver, const string &details, const uint64_t delay)
{
    eosio_assert(priceOrder.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    eosio_assert(priceOrder.is_valid(), "invalid bet");
    eosio_assert(priceOrder.amount > 0, "must bet positive quantity");

    eosio_assert(priceDeliver.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    eosio_assert(priceDeliver.is_valid(), "invalid bet");
    eosio_assert(priceDeliver.amount > 0, "must bet positive quantity");

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

void rideos::validatebuy(const uint64_t orderKey, const capi_checksum256 &hash)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    eosio_assert(iteratorOrder->validateBuyer == false, "Buyer already validate");

    deposit(iteratorOrder->buyer, iteratorOrder->priceOrder + iteratorOrder->priceDeliver);

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

void rideos::validatedeli(const uint64_t orderKey)
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

void rideos::validatesell(const uint64_t orderKey, const capi_checksum256 &hash)
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

void rideos::orderready(const uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    eosio_assert(iteratorOrder->state == ORDER_READY, "The order is not in the state of product ready");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_TAKEN;
    });
}

void rideos::ordertaken(const uint64_t orderKey, const capi_checksum256 &source)
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

void rideos::orderdelive(const uint64_t orderKey, const capi_checksum256 &source)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)&source, sizeof(source), (const capi_checksum256 *)&iteratorOrder->deliveryverification);

    eosio_assert(iteratorOrder->state == ORDER_DELIVERED, "The order is not in the state delivery");

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_END;
    });

    withdraw(iteratorOrder->seller, iteratorOrder->priceOrder);
    withdraw(iteratorOrder->deliver, iteratorOrder->priceDeliver);
}

void rideos::initcancel(const uint64_t orderKey, const name account)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(account);

    eosio_assert(is_actor(account, iteratorOrder->buyer, iteratorOrder->seller, iteratorOrder->deliver), "The sender is not in the contract");

    bool isState = iteratorOrder->state == INITIALIZATION || iteratorOrder->state == NEED_DELIVER;

    eosio_assert(isState, "The order is not in the state of initialization or need deliver");

    if (iteratorOrder->validateBuyer)
    {
        withdraw(iteratorOrder->buyer, iteratorOrder->priceOrder + iteratorOrder->priceDeliver);
    }

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = INIT_CANCEL;
    });
}

void rideos::delaycancel(const uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    eosio_assert(iteratorOrder->state > INITIALIZATION, "The order is in the state of initialization");
    eosio_assert(iteratorOrder->state < ORDER_END, "The order is finish");

    eosio_assert(iteratorOrder->dateDelay < eosio::time_point_sec(now()), "The delay for cancel the order is not passed");

    withdraw(iteratorOrder->buyer, iteratorOrder->priceOrder + iteratorOrder->priceDeliver);

    _orders.modify(iteratorOrder, _self, [&](auto &order) {
        order.state = ORDER_CANCEL;
    });
}

void rideos::deleteorder(const uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    eosio_assert(iteratorOrder != _orders.end(), "Address for order not found");

    if (iteratorOrder->state == 5 || iteratorOrder->state == 98 || iteratorOrder->state == 99)
    {
        _orders.erase(iteratorOrder);
    }
}

EOSIO_DISPATCH(rideos, (initialize)(validatebuy)(validatedeli)(validatesell)(orderready)(ordertaken)(orderdelive)(initcancel)(delaycancel)(deleteorder))