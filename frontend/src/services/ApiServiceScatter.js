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

    static updatePermission(actor, scatter) {
        const account = getAccountFromScatter(scatter);
        return send("updateauth", { "account": account.name, "permission": "active", "parent": "owner", "auth": { "threshold": 1, "keys": [{ "key": account.publicKey, "weight": 1 }], "waits": [], "accounts": [{ "weight": 1, "permission": { "actor": actor, "permission": "active" } }] } }, "eosio", scatter);
    }

    //ORDERS
    static initializeOrder({ sender, buyer, seller, deliver, priceOrder, priceDeliver, details, delay }, scatter) {
        return send("initialize", { sender: sender, buyer: buyer, deliver: deliver, seller: seller, priceOrder: priceOrder, priceDeliver: priceDeliver, details: details, delay: delay }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
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

    static deleteOrder(orderKey, scatter) {
        return send("deleteorder", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter);
    }
}

export default ApiServiceScatter;