#include "blockdeliver.hpp"
using namespace eosio;

// int DELAY_END_ASSIGN = 86400;
// int DELAY_POWER_NEEDED = 86400;
// Only for testing
int DELAY_END_ASSIGN = 5;
int DELAY_POWER_NEEDED = 5;

double DEV_RATE = 0.05;

bool is_equal(const checksum256 &a, const checksum256 &b)
{
    return memcmp((void *)&a, (const void *)&b, sizeof(checksum256)) == 0;
}

bool is_zero(const checksum256 &a)
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

void blockdeliver::deposit(const name account, const asset &quantity)
{
    check(quantity.is_valid(), "invalid quantity");
    check(quantity.amount > 0, "must withdraw positive quantity");
    check(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    action(
        permission_level{account, name("active")},
        name("eosio.token"),
        name("transfer"),
        std::make_tuple(account, _self, quantity, std::string("")))
        .send();
}

void blockdeliver::withdraw(const name account, const asset &quantity)
{
    check(quantity.is_valid(), "invalid quantity");
    check(quantity.amount > 0, "must withdraw positive quantity");
    check(quantity.symbol == eosio::symbol("SYS", 4), "only core token allowed");

    action(
        permission_level{_self, name("active")},
        name("eosio.token"), name("transfer"),
        std::make_tuple(_self, account, quantity, std::string("")))
        .send();
}

void blockdeliver::initialize(const name sender, const name buyer, const name seller, const name deliver, const asset &priceOrder,
                        const asset &priceDeliver, const string &details, const uint64_t delay)
{
    require_auth(sender);

    check(is_actor(sender, buyer, seller, deliver), "The sender is not in the parameters");

    check(priceOrder.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    check(priceOrder.is_valid(), "invalid bet");
    check(priceOrder.amount > 0, "must bet positive quantity");

    check(priceDeliver.symbol == eosio::symbol("SYS", 4), "only core token allowed");
    check(priceDeliver.is_valid(), "invalid bet");
    check(priceDeliver.amount > 0, "must bet positive quantity");

    _orders.emplace(buyer, [&](auto &order) {
        order.orderKey = _orders.available_primary_key();
        order.buyer = buyer;
        order.seller = seller;
        order.deliver = deliver;
        order.state = INITIALIZATION;
        order.date = time_point_sec(now());
        order.dateDelay = time_point_sec(delay);
        order.priceOrder = priceOrder;
        order.priceDeliver = priceDeliver;
        order.validateBuyer = false;
        order.validateSeller = false;
        order.validateDeliver = false;
        order.details = details;
    });
}

void blockdeliver::validatebuy(const uint64_t orderKey, const checksum256 &hash)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->buyer);

    check(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    check(iteratorOrder->validateBuyer == false, "Buyer already validate");

    deposit(iteratorOrder->buyer, iteratorOrder->priceOrder + iteratorOrder->priceDeliver);

    _orders.modify(iteratorOrder, iteratorOrder->buyer, [&](auto &order) {
        order.validateBuyer = true;
        order.deliveryverification = hash;

        if (iteratorOrder->validateSeller && iteratorOrder->validateDeliver)
        {
            order.state = ORDER_VALIDATE;
        }
    });
}

void blockdeliver::validatedeli(const uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    check(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    check(iteratorOrder->validateDeliver == false, "Deliver already validate");

    _orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto &order) {
        order.validateDeliver = true;

        if (iteratorOrder->validateSeller && iteratorOrder->validateBuyer)
        {
            order.state = ORDER_VALIDATE;
        }
    });
}

void blockdeliver::validatesell(const uint64_t orderKey, const checksum256 &hash)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    check(iteratorOrder->state == INITIALIZATION, "The order is not in the state of initialization");

    check(iteratorOrder->validateSeller == false, "Seller already validate");

    _orders.modify(iteratorOrder, iteratorOrder->seller, [&](auto &order) {
        order.validateSeller = true;
        order.takeverification = hash;

        if (iteratorOrder->validateDeliver && iteratorOrder->validateBuyer)
        {
            order.state = ORDER_VALIDATE;
        }
    });
}

void blockdeliver::orderready(const uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->seller);

    check(iteratorOrder->state == ORDER_VALIDATE, "The order is not in the state of product ready");

    _orders.modify(iteratorOrder, iteratorOrder->seller, [&](auto &order) {
        order.state = ORDER_PREPARED;
    });
}

void blockdeliver::ordertaken(const uint64_t orderKey, const string &source)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)source.c_str(), source.size(), iteratorOrder->takeverification);

    check(iteratorOrder->state == ORDER_PREPARED, "The order is not in the state of waiting deliver");

    _orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto &order) {
        order.state = ORDER_TAKED;
    });
}

void blockdeliver::orderdelive(const uint64_t orderKey, const string &source)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(iteratorOrder->deliver);

    assert_sha256((char *)source.c_str(), source.size(), iteratorOrder->deliveryverification);

    check(iteratorOrder->state == ORDER_TAKED, "The order is not in the state delivery");

    _orders.modify(iteratorOrder, iteratorOrder->deliver, [&](auto &order) {
        order.state = ORDER_DELIVERED;
    });

    asset deliverTax = asset{(int64_t)(iteratorOrder->priceDeliver.amount * DEV_RATE), iteratorOrder->priceDeliver.symbol};

    withdraw(iteratorOrder->deliver, iteratorOrder->priceDeliver - deliverTax);
    withdraw(name("sarabrown"), deliverTax);
}

void blockdeliver::initcancel(const uint64_t orderKey, const name account)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(account);

    check(is_actor(account, iteratorOrder->buyer, iteratorOrder->seller, iteratorOrder->deliver), "The sender is not in the contract");

    bool isState = iteratorOrder->state == INITIALIZATION || iteratorOrder->state == NEED_DELIVER;

    check(isState, "The order is not in the state of initialization or need deliver");

    if (iteratorOrder->validateBuyer)
    {
        withdraw(iteratorOrder->buyer, iteratorOrder->priceOrder + iteratorOrder->priceDeliver);
    }

    _orders.modify(iteratorOrder, account, [&](auto &order) {
        order.state = INIT_CANCEL;
    });
}

void blockdeliver::delaycancel(const uint64_t orderKey, const name sender)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    require_auth(sender);

    check(is_actor(sender, iteratorOrder->buyer, iteratorOrder->seller, iteratorOrder->deliver), "The sender is not an actor");

    check(iteratorOrder->state > INITIALIZATION, "The order is in the state of initialization");
    check(iteratorOrder->state < ORDER_DELIVERED, "The order is finish");

    check(iteratorOrder->dateDelay < eosio::time_point_sec(now()), "The delay for cancel the order is not passed");

    withdraw(iteratorOrder->buyer, iteratorOrder->priceOrder + iteratorOrder->priceDeliver);

    _orders.modify(iteratorOrder, sender, [&](auto &order) {
        order.state = ORDER_CANCEL;
    });
}

void blockdeliver::deleteorder(const uint64_t orderKey)
{
    auto iteratorOrder = _orders.find(orderKey);
    check(iteratorOrder != _orders.end(), "Address for order not found");

    if (iteratorOrder->state == 5 || iteratorOrder->state == 98 || iteratorOrder->state == 99)
    {
        _orders.erase(iteratorOrder);
    }
}

EOSIO_DISPATCH(blockdeliver, (initialize)(validatebuy)(validatedeli)(validatesell)(orderready)(ordertaken)(orderdelive)(initcancel)(delaycancel)(deleteorder))