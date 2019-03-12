import { JsonRpc } from 'eosjs';

function getRPC() {
  return new JsonRpc('http://127.0.0.1:8888');
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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
        code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
        scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
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