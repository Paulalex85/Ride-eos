const assert = require('assert');
const eoslime = require('eoslime').init('local');

const RIDEOS_PATH = '/opt/eosio/bin/compiled_contracts/rideos/rideos';
const TOKEN_PATH = "/opt/eosio/bin/contracts/eosio.contracts/contracts/eosio.token/src/eosio.token"

const TOTAL_SUPPLY = '1000000000.0000 SYS';

describe('Rideos contract', function () {

    let rideosContract;
    let tokenContract;
    let buyer;
    let seller;
    let deliver;
    let tokenAccount;
    let rideosAccount;

    this.timeout(15000);

    before(async () => {
        let accounts = await eoslime.Account.createRandoms(5);
        buyer = accounts[0];
        seller = accounts[1];
        deliver = accounts[2];
        tokenAccount = accounts[3];
        rideosAccount = accounts[4];

        // await tokenAccount.addPermission(
        //     tokenAccount.name,
        //     "active",
        //     tokenAccount.name,
        //     "eosio.code"
        // );

        // await tokenAccount.addPermission(
        //     tokenAccount.name,
        //     "owner",
        //     tokenAccount.name,
        //     "eosio.code"
        // );

        // await rideosAccount.addPermission(
        //     rideosAccount.name,
        //     "active",
        //     rideosAccount.name,
        //     "eosio.code"
        // );

        tokenContract = await eoslime.AccountDeployer.deploy(
            TOKEN_PATH + ".wasm",
            TOKEN_PATH + ".abi",
            tokenAccount
        );

        rideosContract = await eoslime.AccountDeployer.deploy(
            RIDEOS_PATH + ".wasm",
            RIDEOS_PATH + ".abi",
            rideosAccount
        );

        await tokenContract.create(tokenAccount.name, TOTAL_SUPPLY, { from: tokenAccount });
        await tokenContract.issue(tokenAccount.name, "50000000.0000 SYS", 'memo', { from: tokenAccount });
        await tokenContract.transfer(tokenAccount.name, buyer.name, "10000.0000 SYS", "memo", { from: tokenAccount });
    });

    it('Should create a new order', async () => {
        let priceOrder = "5.0000 SYS"
        let priceDeliver = "2.0000 SYS"
        let orderDetail = "order"
        let dateDelay = 555
        await rideosContract.initialize(buyer.name, seller.name, deliver.name, priceOrder, priceDeliver, orderDetail, dateDelay, { from: buyer });

        let result = await rideosContract.provider.eos.getTableRows({
            code: rideosContract.name,
            scope: rideosContract.name,
            table: "order",
            limit: 10,
            json: true
        });

        assert.strictEqual(result.rows.length > 0, true, "Table result should't be empty");

        let order = result.rows[0];
        console.log(result.rows[0])
        assert.strictEqual(order.buyer, buyer.name, "Not the same buyer");
        assert.strictEqual(order.seller, seller.name, "Not the same seller");
        assert.strictEqual(order.deliver, deliver.name, "Not the same deliver");
        assert.strictEqual(order.state, 1, "The state should be 1");
        assert.strictEqual(new Date(order.dateDelay + "Z").getTime() / 1000, dateDelay, "The delay should be " + dateDelay);
        assert.strictEqual(order.priceDeliver, priceDeliver, "The price deliver should be " + priceDeliver);
        assert.strictEqual(order.priceOrder, priceOrder, "The price order should be " + priceOrder);
        assert.strictEqual(order.details, orderDetail, "The order detail should be " + orderDetail);
    });
});