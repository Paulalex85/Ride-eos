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

async function send(actionName, actionData, contractDestination, account, scatter) {

    const eos = eosAPI(scatter);
    try {
        const result = await eos.transact({
            actions: [{
                account: contractDestination,
                name: actionName,
                authorization: [{
                    actor: account,
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
        console.log('\nCaught exception: ' + e);
        if (e instanceof RpcError)
            console.log(JSON.stringify(e.json, null, 2));
    }
}


class ApiServiceScatter {

    static adduser(account, username, scatter) {
        return send("adduser", { account: account, username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, account, scatter);
    }
}

export default ApiServiceScatter;