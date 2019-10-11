const ecc = require('eosjs-ecc');
const assert = require('assert');
const eoslime = require('eoslime').init('local');

const RIDEOS_PATH = '/opt/eosio/bin/compiled_contracts/rideos/rideos';
const TOKEN_PATH = "/opt/eosio/bin/contracts/eosio.contracts/contracts/eosio.token/src/eosio.token"

const TOTAL_SUPPLY = '1000000000.0000 SYS';
const DEV_RATE = 0.05;
const CURRENCY_SYMBOL = 'SYS'
const DEV_ACCOUNT_NAME = "sarabrown"

let rideosContract;
let tokenContract;
let buyer, seller, deliver, devAccount;
let rideosAccount, eosiotokenAccount;

function generateDataToSign(orderKey, buyer, seller, deliver, date, dateDelay, priceOrder, priceDeliver, details) {
    return "orderKey:" + orderKey
        + ",buyer:" + buyer
        + ",seller:" + seller
        + ",deliver:" + deliver
        + ",date:" + date
        + ",dateDelay:" + dateDelay
        + ",priceOrder:" + priceOrder
        + ",priceDeliver:" + priceDeliver
        + ",details:" + details;
}

function assetToAmount(asset) {
    if (asset !== undefined && asset.length > 0) {
        return parseFloat(asset.split(" ")[0]);
    }
    return 0;
}

function chunk(str, n) {
    var ret = [];
    var i;
    var len;

    for (i = 0, len = str.length; i < len; i += n) {
        ret.push(str.substr(i, n))
    }

    return ret
};

function sliceData(data) {
    return chunk(data, 8).join(' ');
}

function createKey(account, order) {
    let data = generateDataToSign(order.orderKey, order.buyer, order.seller, order.deliver, new Date(order.date).getTime(), new Date(order.dateDelay).getTime(), order.priceOrder, order.priceDeliver, order.details);
    let hashData = ecc.sha256(data);
    let slicedData = sliceData(hashData);
    let signature = ecc.sign(slicedData, account.privateKey);

    let key = ecc.sha256(signature);
    let hash = ecc.sha256(key);

    return {
        key: key,
        hash: hash
    }
}

async function orderTableIsEmpty() {
    let result = await rideosContract.provider.eos.getTableRows({
        code: rideosContract.name,
        scope: rideosContract.name,
        table: "order",
        limit: 10,
        json: true
    });

    return result.rows.length == 0;
}

async function getOrder(key) {
    let result = await rideosContract.provider.eos.getTableRows({
        json: true,
        code: rideosContract.name,    // contract who owns the table
        scope: rideosContract.name,   // scope of the table
        table: "order",    // name of the table as specified by the contract abi
        limit: 1,
        lower_bound: key,
    });

    return result.rows[0]
}

async function createOrder(buyer, seller, deliver, priceOrder = "5.0000 SYS", priceDeliver = "2.0000 SYS", orderDetail = "order", dateDelay = 555) {
    await rideosContract.initialize(buyer.name,
        seller.name,
        deliver.name,
        priceOrder,
        priceDeliver,
        orderDetail,
        dateDelay,
        { from: buyer }
    );

    let result = await rideosContract.provider.eos.getTableRows({
        code: rideosContract.name,
        scope: rideosContract.name,
        table: "order",
        limit: 10,
        json: true
    });

    assert.strictEqual(result.rows.length > 0, true, "Table result should't be empty");

    let order = result.rows[0];
    assert.strictEqual(order.buyer, buyer.name, "Not the same buyer");
    assert.strictEqual(order.seller, seller.name, "Not the same seller");
    assert.strictEqual(order.deliver, deliver.name, "Not the same deliver");
    assert.strictEqual(order.state, 1, "The state should be 1");
    assert.strictEqual(new Date(order.dateDelay + "Z").getTime() / 1000, dateDelay, "The delay should be " + dateDelay);
    assert.strictEqual(order.priceDeliver, priceDeliver, "The price deliver should be " + priceDeliver);
    assert.strictEqual(order.priceOrder, priceOrder, "The price order should be " + priceOrder);
    assert.strictEqual(order.details, orderDetail, "The order detail should be " + orderDetail);

    return order;
}

async function validateDeliver(order) {
    await rideosContract.validatedeli(order.orderKey, { from: deliver });
    order = await getOrder(order.orderKey);
    assert.strictEqual(order.validateDeliver, 1, "Validate deliver should be 1");
    return order;
}

async function validateBuyer(order, keyBuyer) {
    await rideosContract.validatebuy(order.orderKey, keyBuyer.hash, { from: buyer });
    order = await getOrder(order.orderKey);
    assert.strictEqual(order.validateBuyer, 1, "Validate buyer should be 1");
    return order;
}

async function validateSeller(order, keySeller) {
    await rideosContract.validatesell(order.orderKey, keySeller.hash, { from: seller });
    order = await getOrder(order.orderKey);
    assert.strictEqual(order.validateSeller, 1, "Validate seller should be 1");
    return order;
}

async function orderReady(orderKey, account) {
    await rideosContract.orderready(orderKey, { from: account });
    let order = await getOrder(orderKey)
    assert.strictEqual(order.state, 3, "The state should be 3");
    return order;
}

async function orderTaken(orderKey, key, account) {
    await rideosContract.ordertaken(orderKey, key, { from: account });
    let order = await getOrder(orderKey)
    assert.strictEqual(order.state, 4, "The state should be 4");
    return order;
}

async function orderDelive(orderKey, key, account) {
    let balanceSeller = await seller.getBalance(CURRENCY_SYMBOL, tokenContract.name);
    let balanceDeliver = await deliver.getBalance(CURRENCY_SYMBOL, tokenContract.name);
    let balanceDev = await devAccount.getBalance(CURRENCY_SYMBOL, tokenContract.name);
    balanceSeller = assetToAmount(balanceSeller[0])
    balanceDeliver = assetToAmount(balanceDeliver[0])
    balanceDev = assetToAmount(balanceDev[0])

    await rideosContract.orderdelive(orderKey, key, { from: account });
    let order = await getOrder(orderKey)

    let balanceDevAfter = await devAccount.getBalance(CURRENCY_SYMBOL, tokenContract.name);
    balanceDevAfter = assetToAmount(balanceDevAfter[0])
    let devAmount = (assetToAmount(order.priceOrder) + assetToAmount(order.priceDeliver)) * DEV_RATE
    assert.strictEqual((balanceDevAfter - balanceDev).toString(), devAmount.toFixed(2).toString(), "The balance of the dev account is not ok");

    let balanceSellerAfter = await seller.getBalance(CURRENCY_SYMBOL, tokenContract.name);
    assert.strictEqual(balanceSeller + (assetToAmount(order.priceOrder) * (1 - DEV_RATE)), assetToAmount(balanceSellerAfter[0]), "The balance of the seller account is not ok");

    let balanceDeliverAfter = await deliver.getBalance(CURRENCY_SYMBOL, tokenContract.name);
    assert.strictEqual(balanceDeliver + (assetToAmount(order.priceDeliver) * (1 - DEV_RATE)), assetToAmount(balanceDeliverAfter[0]), "The balance of the deliver account is not ok");

    assert.strictEqual(order.state, 5, "The state should be 5");
    return order;
}

async function initializeCancel(orderKey, account) {
    await rideosContract.initcancel(orderKey, account.name, { from: account });
    let order = await getOrder(orderKey)
    assert.strictEqual(order.state, 99, "The state should be 99");
    return order;
}

async function delayCancel(orderKey, account) {
    await rideosContract.delaycancel(orderKey, { from: account });
    let order = await getOrder(orderKey)
    assert.strictEqual(order.state, 98, "The state should be 98");
    return order;
}

async function deleteOrder(orderKey) {
    await rideosContract.deleteorder(orderKey);
    let tableIsEmpty = await orderTableIsEmpty()
    assert.strictEqual(tableIsEmpty, true, "The table should be empty");
}

describe('Rideos contract', function () {

    this.timeout(25000);

    before(async () => {
        rideosAccount = eoslime.Account.load('rideos', '5Ka8DotT5vXv8tgjCoJzNrKGvv8Go7xVfycd3XvzjYMQn6bDStr');
        eosiotokenAccount = eoslime.Account.load('eosio.token', '5Jaq9Z6VNLvKBzoeiT29FjoxX5jqU4bYyvYp47RBNfu75iLhkHw');
        devAccount = eoslime.Account.load(DEV_ACCOUNT_NAME, '5KE2UNPCZX5QepKcLpLXVCLdAw7dBfJFJnuCHhXUf61hPRMtUZg');

        tokenContract = eoslime.Contract(TOKEN_PATH + ".abi", "eosio.token", eosiotokenAccount);
        rideosContract = eoslime.Contract(RIDEOS_PATH + ".abi", "rideos", rideosAccount);
        await rideosContract.makeInline();

        await tokenContract.create(eosiotokenAccount.name, TOTAL_SUPPLY, { from: eosiotokenAccount });
        await tokenContract.issue(eosiotokenAccount.name, "50000000.0000 SYS", 'memo', { from: eosiotokenAccount });
    });

    beforeEach(async () => {
        let accounts = await eoslime.Account.createRandoms(4);
        buyer = accounts[0];
        seller = accounts[1];
        deliver = accounts[2];

        await tokenContract.transfer(tokenContract.executor.name, buyer.name, "10000.0000 SYS", "memo", { from: tokenContract.executor });
        await tokenContract.transfer(tokenContract.executor.name, seller.name, "10.0000 SYS", "memo", { from: tokenContract.executor });
        await tokenContract.transfer(tokenContract.executor.name, deliver.name, "10.0000 SYS", "memo", { from: tokenContract.executor });

        await buyer.addPermission('active', rideosContract.executor.name);
    });

    it('Create a new order, cancel and delete', async () => {
        let order = await createOrder(buyer, seller, deliver);

        order = await initializeCancel(order.orderKey, buyer);

        await deleteOrder(order.orderKey)
    });

    it('Validate the order, end with buyer', async () => {
        let order = await createOrder(buyer, seller, deliver);

        order = await validateDeliver(order);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keySeller = createKey(seller, order);
        order = await validateSeller(order, keySeller);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keyBuyer = createKey(buyer, order);
        order = await validateBuyer(order, keyBuyer);
        assert.strictEqual(order.state, 2, "The state should move at 2");

        await eoslime.utils.test.expectAssert(
            rideosContract.initcancel(order.orderKey, buyer.name, { from: buyer })
        );
        order = await getOrder(order.orderKey)
        assert.strictEqual(order.state, 2, "The state should stay at 2");

        order = await delayCancel(order.orderKey, buyer);
        await deleteOrder(order.orderKey)
    });

    it('Validate the order, end with deliver', async () => {
        let order = await createOrder(buyer, seller, deliver);

        let keySeller = createKey(seller, order);
        order = await validateSeller(order, keySeller);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keyBuyer = createKey(buyer, order);
        order = await validateBuyer(order, keyBuyer);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        order = await validateDeliver(order);
        assert.strictEqual(order.state, 2, "The state should move to 2");

        await eoslime.utils.test.expectAssert(
            rideosContract.initcancel(order.orderKey, deliver.name, { from: deliver })
        );
        order = await getOrder(order.orderKey)
        assert.strictEqual(order.state, 2, "The state should stay at 2");

        order = await delayCancel(order.orderKey, buyer);
        await deleteOrder(order.orderKey)
    });

    it('Validate the order, end with seller', async () => {
        let order = await createOrder(buyer, seller, deliver);

        let keyBuyer = createKey(buyer, order);
        order = await validateBuyer(order, keyBuyer);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        order = await validateDeliver(order);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keySeller = createKey(seller, order);
        order = await validateSeller(order, keySeller);
        assert.strictEqual(order.state, 2, "The state should move to 2");

        await eoslime.utils.test.expectAssert(
            rideosContract.initcancel(order.orderKey, seller.name, { from: seller })
        );
        order = await getOrder(order.orderKey)
        assert.strictEqual(order.state, 2, "The state should stay at 2");

        order = await delayCancel(order.orderKey, buyer);
        await deleteOrder(order.orderKey)
    });

    it('Order ready', async () => {
        let order = await createOrder(buyer, seller, deliver);

        order = await validateDeliver(order);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keySeller = createKey(seller, order);
        order = await validateSeller(order, keySeller);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keyBuyer = createKey(buyer, order);
        order = await validateBuyer(order, keyBuyer);
        assert.strictEqual(order.state, 2, "The state should move at 2");

        order = await orderReady(order.orderKey, seller)

        await eoslime.utils.test.expectAssert(
            rideosContract.initcancel(order.orderKey, buyer.name, { from: buyer })
        );
        order = await getOrder(order.orderKey)
        assert.strictEqual(order.state, 3, "The state should stay at 3");

        order = await delayCancel(order.orderKey, buyer);
        await deleteOrder(order.orderKey)
    });

    it('Order taken', async () => {
        let order = await createOrder(buyer, seller, deliver);

        order = await validateDeliver(order);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keySeller = createKey(seller, order);
        order = await validateSeller(order, keySeller);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keyBuyer = createKey(buyer, order);
        order = await validateBuyer(order, keyBuyer);
        assert.strictEqual(order.state, 2, "The state should move at 2");

        order = await orderReady(order.orderKey, seller)

        order = await orderTaken(order.orderKey, keySeller.key, deliver)

        await eoslime.utils.test.expectAssert(
            rideosContract.initcancel(order.orderKey, buyer.name, { from: buyer })
        );
        order = await getOrder(order.orderKey)
        assert.strictEqual(order.state, 4, "The state should stay at 4");

        order = await delayCancel(order.orderKey, buyer);
        await deleteOrder(order.orderKey)
    });

    it('Order delivered', async () => {
        let order = await createOrder(buyer, seller, deliver);

        order = await validateDeliver(order);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keySeller = createKey(seller, order);
        order = await validateSeller(order, keySeller);
        assert.strictEqual(order.state, 1, "The state should not move of 1");

        let keyBuyer = createKey(buyer, order);
        order = await validateBuyer(order, keyBuyer);
        assert.strictEqual(order.state, 2, "The state should move at 2");

        order = await orderReady(order.orderKey, seller)

        order = await orderTaken(order.orderKey, keySeller.key, deliver)

        order = await orderDelive(order.orderKey, keyBuyer.key, deliver)

        await eoslime.utils.test.expectAssert(
            rideosContract.initcancel(order.orderKey, buyer.name, { from: buyer })
        );
        order = await getOrder(order.orderKey)
        assert.strictEqual(order.state, 5, "The state should stay at 5");

        await deleteOrder(order.orderKey)
    });
});


