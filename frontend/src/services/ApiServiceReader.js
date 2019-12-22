import {JsonRpc} from 'eosjs';

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
                                limit = 10
                            }) {
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

class ApiServiceReader {

    static async getBalanceAccountEOS(account) {
        let code = "eosio.token";
        let symbol = "SYS";
        const rpc = getRPC();
        const result = await rpc.fetch(
            "/v1/chain/get_currency_balance", {
                code,
                account,
                symbol,
            });
        if (result[0] === undefined) {
            return "0.0000 SYS"
        }
        return result[0];
    }

    //Table row
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
        return await this.getOrderBySecondaryIndex(account, 2);
    }

    static async getOrderBySeller(account) {
        return await this.getOrderBySecondaryIndex(account, 3);
    }

    static async getOrderByDeliver(account) {
        return await this.getOrderBySecondaryIndex(account, 4);
    }

    static async getOrderBySecondaryIndex(account, indexPosition) {
        try {
            return await getTableRows({
                json: true,
                code: process.env.REACT_APP_EOSIO_CONTRACT_USERS,    // contract who owns the table
                scope: process.env.REACT_APP_EOSIO_CONTRACT_USERS,   // scope of the table
                table: "order",    // name of the table as specified by the contract abi
                lower_bound: account,
                upper_bound: account,
                limit: 20,
                key_type: "i64",
                index_position: indexPosition,
            });
        } catch (err) {
            return console.error(err);
        }
    }
}

export default ApiServiceReader;