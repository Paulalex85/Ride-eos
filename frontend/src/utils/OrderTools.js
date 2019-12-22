import {ApiServiceReader, KeyGenerator} from "services";

export const createKeyOrder = async (activeUser, order) => {
    let publicKey = await activeUser.getKeys();
    if (Array.isArray(publicKey) && publicKey.length) {
        let slicedData = KeyGenerator.generateSlicedData(order);
        let signedData = await activeUser.signArbitrary(publicKey[0], slicedData, "Generate order validation key");
        return KeyGenerator.generateKeyFromSignature(signedData);
    } else {
        throw new Error("Error : no public key detected in the active user");
    }
};

const setListOrdersToMap = (list, map) => {
    for (let entry of list.rows) {
        map.set(entry.orderKey.toString(), entry)
    }
    return map;
};

export const getOrdersOfUser = async (name,setListOrders) => {
    let listRows = {
        rows: []
    };
    let mapOrders = new Map();
    ApiServiceReader.getOrderByBuyer(name).then(listBuyer => {
        mapOrders = setListOrdersToMap(listBuyer, mapOrders);
        ApiServiceReader.getOrderBySeller(name).then(listSeller => {
            mapOrders = setListOrdersToMap(listSeller, mapOrders);
            ApiServiceReader.getOrderByDeliver(name).then(listDeliver => {
                mapOrders = setListOrdersToMap(listDeliver, mapOrders);
                if (mapOrders.size) {
                    listRows = {
                        rows: Array.from(mapOrders.values())
                    };
                }
                setListOrders({listOrders: listRows, account: name})
            })
        })
    }).catch((err) => {
        console.error(err)
    });
};