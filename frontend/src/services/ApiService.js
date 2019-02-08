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
  limit = 10 }) {
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
  static getInfo() {
    const eos = eosAPI();
    console.log(eos)
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
        //lower_bound: account,
        //upper_bound: account,
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