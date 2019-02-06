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
}

export default ApiServiceScatter;