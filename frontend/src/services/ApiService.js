import Eos from 'eosjs';
import ecc from 'eosjs-ecc'

function eosConfiguration() {
  // configuration
  let config = {
    chainId: null, // 32 byte (64 char) hex string
    keyProvider: [localStorage.getItem("privateKey")], // WIF string or array of keys..
    httpEndpoint: 'http://127.0.0.1:8888',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true
  }
  return Eos(config);
}

async function auth(contractDestination) {
  const eos = eosConfiguration();

  const auth = {
    "threshold": 1,
    "keys": [{
      "key": ecc.privateToPublic(localStorage.getItem("privateKey")),
      "weight": 1
    }],
    "accounts": [{
      "permission": {
        "actor": contractDestination,
        "permission": "active"
      }, "weight": 1
    }]
  }

  const tx = {
    account: localStorage.getItem("userAccount"),
    permission: 'active',
    parent: 'owner',
    auth: auth
  };

  return await eos.updateauth(tx);
}

async function send(actionName, actionData, contractDestination) {
  const eos = eosConfiguration();

  const result = await eos.transaction({
    actions: [{
      account: contractDestination,
      name: actionName,
      authorization: [{
        actor: localStorage.getItem("userAccount"),
        permission: 'active',
      }],
      data: actionData,
    }],
  });

  return result;
}

class ApiService {
  //USERS
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
      send("adduser", { account: account, username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS)
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
    return send("updateuser", { account: localStorage.getItem("userAccount"), username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS)
  }

  static deposit({ quantity }) {
    return auth(process.env.REACT_APP_EOSIO_CONTRACT_USERS)
      .then(() => {
        send("deposit", { account: localStorage.getItem("userAccount"), quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS)
      });
  }

  static withdraw({ quantity }) {
    return auth(process.env.REACT_APP_EOSIO_CONTRACT_USERS)
      .then(() => {
        send("withdraw", { account: localStorage.getItem("userAccount"), quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS)
      });
  }

  //ORDERS
  static getOrder({ orderKey }) {
    return new Promise((resolve, reject) => {
      this.getOrderByKey(orderKey)
        .then((order) => {
          resolve(order);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getOrders({ account }) {
    return new Promise((resolve, reject) => {
      this.getOrderByBuyer(account)
        .then((list) => {
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  //Table row
  static async getUserByAccount(account) {
    const eos = eosConfiguration();
    try {
      const result = await eos.getTableRows({
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

  static async getOrderByKey(orderKey) {
    const eos = eosConfiguration();
    try {
      const result = await eos.getTableRows({
        "json": true,
        "code": process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,    // contract who owns the table
        "scope": process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,   // scope of the table
        "table": "order",    // name of the table as specified by the contract abi
        "limit": 1,
        "lower_bound": orderKey,
      });
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

  static async getOrderByBuyer(account) {
    const eos = eosConfiguration();
    try {
      const result = await eos.getTableRows({
        "json": true,
        "code": process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,    // contract who owns the table
        "scope": process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,   // scope of the table
        "table": "order",    // name of the table as specified by the contract abi
        "limit": 10,
        "lower_bound": account,
        "index_position": "1",
      });
      return result;
    } catch (err) {
      return console.error(err);
    }
  }

}

export default ApiService;