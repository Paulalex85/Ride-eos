const assert = require('assert');
const eoslime = require('eoslime').init('local');

const RIDEOS_PATH = '/opt/eosio/bin/compiled_contracts/rideos/rideos';
const TOKEN_PATH = "/opt/eosio/bin/contracts/eosio.contracts/contracts/eosio.token/src/eosio.token"

const TOTAL_SUPPLY = '1000000000.0000 SYS';

describe('Rideos contract test', function () {

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
        await rideosContract.initialize(buyer.name, seller.name, deliver.name, "5.0000 SYS", "2.0000 SYS", "order", 0, { from: buyer });

        let tableResults = await rideosContract.provider.eos.getTableRows({
            code: rideosContract.name,
            scope: rideosContract.name,
            table: "order",
            limit: 10,
            json: true
        });
        console.log(tableResults)
    });
});