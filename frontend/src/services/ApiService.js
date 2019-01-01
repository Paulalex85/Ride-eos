import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs';

function getRPC() {
  return new JsonRpc('http://127.0.0.1:8888');
}

function eosAPI() {
  const rpc = getRPC();
  const signatureProvider = new JsSignatureProvider([localStorage.getItem("privateKey")]);

  return new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
}

async function send(actionName, actionData, contractDestination) {
  const eos = eosAPI();
  try {
    const result = await eos.transact({
      actions: [{
        account: contractDestination,
        name: actionName,
        authorization: [{
          actor: localStorage.getItem("userAccount"),
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

async function getTableRows({
  json = true,
  code,
  scope,
  table,
  table_key = "",
  lower_bound = "",
  upper_bound = "",
  index_position = 1,
  key_type = "",
  limit = 10 }: any): Promise<any> {
  const rpc = getRPC();
  return await rpc.fetch(
    "/v1/chain/get_table_rows", {
      json,
      code,
      scope,
      table,
      table_key,
      lower_bound,
      upper_bound,
      index_position,
      key_type,
      limit,
    });
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
    return send("updateuser", { account: localStorage.getItem("userAccount"), username: username }, process.env.REACT_APP_EOSIO_CONTRACT_USERS);
  }

  static deposit({ quantity }) {
    return send("deposit", { account: localStorage.getItem("userAccount"), quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS);
  }

  static withdraw({ quantity }) {
    // return auth(process.env.REACT_APP_EOSIO_CONTRACT_USERS)
    //   .then(() => {
    return send("withdraw", { account: localStorage.getItem("userAccount"), quantity: quantity }, process.env.REACT_APP_EOSIO_CONTRACT_USERS);
    // });
  }

  //ORDERS
  static getOrder(orderKey) {
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

  static needDeliver({ buyer, seller, priceOrder, priceDeliver, details, delay, placeKey }) {
    return send("needdeliver", { buyer: buyer, seller: seller, priceOrder: priceOrder, priceDeliver: priceDeliver, details: details, delay: delay, placeKey: placeKey }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static initializeOrder({ buyer, seller, deliver, priceOrder, priceDeliver, details, delay, placeKey }) {
    return send("initialize", { buyer: buyer, deliver: deliver, seller: seller, priceOrder: priceOrder, priceDeliver: priceDeliver, details: details, delay: delay, placeKey: placeKey }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static validateBuyer(orderKey, hash) {
    return send("validatebuy", { orderKey: orderKey, hash: hash }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static validateSeller(orderKey, hash) {
    return send("validatesell", { orderKey: orderKey, hash: hash }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static validateDeliver(orderKey) {
    return send("validatedeli", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static orderReady(orderKey) {
    return send("orderready", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static orderTaken(orderKey, source) {
    return send("ordertaken", { orderKey: orderKey, source: source }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static orderDelivered(orderKey, source) {
    return send("orderdelive", { orderKey: orderKey, source: source }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  static initCancel(orderKey, account) {
    return send("initcancel", { orderKey: orderKey, account: account }, process.env.REACT_APP_EOSIO_CONTRACT_ORDERS);
  }

  //MARKET
  static getPlaces() {
    return new Promise((resolve, reject) => {
      this.getAllPlaces()
        .then((list) => {
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getAssignments() {
    return new Promise((resolve, reject) => {
      this.getAssignmentsByUser()
        .then((list) => {
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getAssignment() {
    return new Promise((resolve, reject) => {
      this.getAssignmentByKey()
        .then((assign) => {
          resolve(assign);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static newAssign(account, placeKey) {
    return send("newassign", { account: account, placeKey: placeKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  static endAssign(assignmentKey) {
    return send("endassign", { assignmentKey: assignmentKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  static getOffers() {
    return new Promise((resolve, reject) => {
      this.getAllOffers()
        .then((list) => {
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getOffer(offerKey) {
    return new Promise((resolve, reject) => {
      this.getOfferByKey(offerKey)
        .then((list) => {
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static addOffer(orderKey) {
    return send("addoffer", { orderKey: orderKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  static getApplies() {
    return new Promise((resolve, reject) => {
      this.getAllApplies()
        .then((list) => {
          resolve(list);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static endOffer(deliver, offerKey) {
    return send("endoffer", { deliver: deliver, offerKey: offerKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  static cancelOffer(offerKey) {
    return send("canceloffer", { offerKey: offerKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  static addApply(account, offerKey) {
    return send("addapply", { account: account, offerKey: offerKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  static cancelApply(applyKey) {
    return send("cancelapply", { applyKey: applyKey }, process.env.REACT_APP_EOSIO_CONTRACT_MARKET);
  }

  //Table row
  static async getUserByAccount(account) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,
        table: "user",
        lower_bound: account,
        limit: 1
      });
      console.log(result);
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

  static async getOrderByKey(orderKey) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,   // scope of the table
        table: "order",    // name of the table as specified by the contract abi
        limit: 1,
        lower_bound: orderKey,
      });
      console.log(result);
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

  static async getOrderByBuyer(account) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_ORDERS,   // scope of the table
        table: "order",    // name of the table as specified by the contract abi
        lower_bound: account,
        upper_bound: account,
        limit: 10,
        key_type: "i64",
        index_position: 2,

      });
      return result;
    } catch (err) {
      return console.error(err);
    }
  }

  static async getAllPlaces() {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "place",    // name of the table as specified by the contract abi
        limit: 10,
      });
      return result;
    } catch (err) {
      return console.error(err);
    }
  }

  static async getPlace(placeKey) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "place",    // name of the table as specified by the contract abi
        limit: 1,
        lower_bound: placeKey,
      });
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

  static async getAssignmentsByUser(account) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "assignment",    // name of the table as specified by the contract abi
        limit: 10,
        lower_bound: account,
        index_position: "1",
      });
      return result;
    } catch (err) {
      return console.error(err);
    }
  }

  static async getAssignmentByKey(assignmentKey) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "assignment",    // name of the table as specified by the contract abi
        limit: 1,
        lower_bound: assignmentKey,
        index_position: "1",
      });
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

  static async getAllOffers() {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "offer",    // name of the table as specified by the contract abi
        limit: 10,
      });
      return result;
    } catch (err) {
      return console.error(err);
    }
  }

  static async getOfferByKey(offerKey) {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "offer",    // name of the table as specified by the contract abi
        limit: 1,
        lower_bound: offerKey,
      });
      return result.rows[0];
    } catch (err) {
      return console.error(err);
    }
  }

  static async getAllApplies() {
    try {
      const result = await getTableRows({
        json: true,
        code: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_MARKET,   // scope of the table
        table: "apply",    // name of the table as specified by the contract abi
        limit: 10,
      });
      return result;
    } catch (err) {
      return console.error(err);
    }
  }
}

export default ApiService;