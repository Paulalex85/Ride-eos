import { Api, Rpc, SignatureProvider } from 'eosjs';

// Main action call to blockchain
async function takeAction(action, dataValue, contractName) {
  const privateKey = localStorage.getItem("privateKey");
  const rpc = new Rpc.JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
  const signatureProvider = new SignatureProvider([privateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

  // Main call to blockchain after setting action, account_name and data
  try {
    const resultWithConfig = await api.transact({
      actions: [{
        account: contractName,
        name: action,
        authorization: [{
          actor: localStorage.getItem("userAccount"),
          permission: 'active',
        }],
        data: dataValue,
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    return resultWithConfig;
  } catch (err) {
    throw(err)
  }
}

class ApiService {

  static login({ account,username, key }) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("userAccount", account);
      localStorage.setItem("privateKey", key);
      takeAction("add", { account: account, username:username },process.env.REACT_APP_EOSIO_CONTRACT_USERS )
        .then(() => {
          resolve();
        })
        .catch(err => {
          localStorage.removeItem("userAccount");
          localStorage.removeItem("privateKey");
          reject(err);
        });
    });
  }

}

export default ApiService;