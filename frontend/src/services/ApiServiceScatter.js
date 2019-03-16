import ScatterJS from 'scatterjs-core';
import { Api, JsonRpc, RpcError } from 'eosjs';


function getRPC() {
    return new JsonRpc('http://127.0.0.1:8888');
}

function eosAPI(scatter) {
    const rpc = getRPC();
    const network = getNetwork();

    return scatter.eos(network, Api, { rpc, beta3: true });
}

function getNetwork() {
    return ScatterJS.Network.fromJson({
        blockchain: 'eos',
        host: '127.0.0.1',
        port: 8888,
        protocol: 'http',
        chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
    });
}

function getAccountFromScatter(scatter) {
    return scatter.identity.accounts.find(x => x.blockchain === 'eos');
}


async function send(actionName, actionData, contractDestination, scatter) {

    const eos = eosAPI(scatter);
    const account = getAccountFromScatter(scatter);
    try {
        const result = await eos.transact({
            actions: [{
                account: contractDestination,
                name: actionName,
                authorization: [{
                    actor: account.name,
                    permission: 'active',
                }],
                data: actionData,
            }],
        }, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
        return result;
    } catch (e) {
        console.log(actionName)
        console.log('\nCaught exception: ' + e);
        if (e instanceof RpcError)
            console.log(JSON.stringify(e.json, null, 2));
    }
}

class ApiServiceScatter {

    static updatePermission(account, actor, scatter) {
        return send("updateauth", { "account": account.name, "permission": "active", "parent": "owner", "auth": { "threshold": 1, "keys": [{ "key": account.publicKey, "weight": 1 }], "waits": [], "accounts": [{ "weight": 1, "permission": { "actor": actor, "permission": "active" } }] } }, "eosio", scatter);
    }

    //USERS
    static adduser(username, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("adduser", { account: account.name, username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static updateUser(username, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("updateuser", { account: account.name, username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static deposit(quantity, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("deposit", { account: account.name, quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static withdraw(quantity, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("withdraw", { account: account.name, quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    //STACKPOWER
    static stackpow(quantity, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("stackpow", { account: account.name, quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static unlockpow(quantity, stackKey, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("unlockpow", { account: account.name, quantity: quantity, stackKey: stackKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static unstackpow(stackKey, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("unstackpow", { account: account.name, stackKey: stackKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    //ORDERS

    static needDeliver({ buyer, seller, priceOrder, priceDeliver, details, delay, placeKey }, scatter) {
        return send("needdeliver", { buyer: buyer, seller: seller, priceOrder: priceOrder, priceDeliver: priceDeliver, details: details, delay: delay, placeKey: placeKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static initializeOrder({ buyer, seller, deliver, priceOrder, priceDeliver, details, delay, placeKey }, scatter) {
        return send("initialize", { buyer: buyer, deliver: deliver, seller: seller, priceOrder: priceOrder, priceDeliver: priceDeliver, details: details, delay: delay, placeKey: placeKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static validateBuyer(orderKey, hash, scatter) {
        return send("validatebuy", { orderKey: orderKey, hash: hash }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static validateSeller(orderKey, hash, scatter) {
        return send("validatesell", { orderKey: orderKey, hash: hash }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static validateDeliver(orderKey, scatter) {
        return send("validatedeli", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static orderReady(orderKey, scatter) {
        return send("orderready", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static orderTaken(orderKey, source, scatter) {
        return send("ordertaken", { orderKey: orderKey, source: source }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static orderDelivered(orderKey, source, scatter) {
        return send("orderdelive", { orderKey: orderKey, source: source }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static initCancel(orderKey, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("initcancel", { orderKey: orderKey, account: account.name }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static delayCancel(orderKey, scatter) {
        return send("delaycancel", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    //MARKET
    static newAssign(placeKey, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("newassign", { account: account.name, placeKey: placeKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static endAssign(assignmentKey, scatter) {
        return send("endassign", { assignmentKey: assignmentKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static addOffer(orderKey, scatter) {
        return send("addoffer", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static endOffer(deliver, offerKey, scatter) {
        return send("endoffer", { deliver: deliver, offerKey: offerKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static cancelOffer(offerKey, scatter) {
        return send("canceloffer", { offerKey: offerKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static addApply(offerKey, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("addapply", { account: account.name, offerKey: offerKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

    static cancelApply(applyKey, scatter) {
        return send("cancelapply", { applyKey: applyKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }

}

export default ApiServiceScatter;