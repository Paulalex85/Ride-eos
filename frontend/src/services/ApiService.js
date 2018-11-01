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
    throw (err)
  }
}

class ApiService {

  static getCurrentUser() {
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem("userAccount")) {
        return reject();
      }
      this.getUserByAccount(localStorage.getItem("userAccount"))
        .then((row) => {
          console.log(row);
          if (row === undefined) {
            console.log("Utilisateur inconnu");
            localStorage.removeItem("userAccount");
            localStorage.removeItem("privateKey");
            reject();
          } else {
            resolve(row);
          }
        })
        .catch(err => {
          console.log("erreur");
          localStorage.removeItem("userAccount");
          localStorage.removeItem("privateKey");
          reject(err);
        });
    });
  }

  static login({ account, username, key }) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("userAccount", account);
      localStorage.setItem("privateKey", key);
      takeAction("adduser", { account: account, username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS)
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

  static updateUser({ username }) {
    return new Promise((resolve, reject) => {
      takeAction("updateuser", { account: localStorage.getItem("userAccount"), username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS)
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

  static async getUserByAccount(account) {
    try {
      const rpc = new Rpc.JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
      const result = await rpc.get_table_rows({
        "json": true,
        "code": process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        "scope": process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
        "table": "user",    // name of the table as specified by the contract abi
        "limit": 1,
        "lower_bound": account,
      });
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

}

export default ApiService;