function generateTransaction(contractDestination, actionName, actionData, accountName) {
    return {
        actions: [{
            account: contractDestination,
            name: actionName,
            authorization: [{
                actor: accountName,
                permission: 'active',
            }],
            data: actionData,
        }],
    }
}

async function send(actionName, actionData, contractDestination, activeUser) {
    try {
        const accountName = await activeUser.getAccountName();
        const transaction = generateTransaction(contractDestination, actionName, actionData, accountName);
        return await activeUser.signTransaction(transaction, {broadcast: true, expireSeconds: 300});
    } catch (e) {
        let text = JSON.stringify(e);
        console.error('UAL Error', JSON.parse(text));
    }
}

class ApiServiceSender {
    //ORDERS
    static initializeOrder({sender, buyer, seller, deliver, priceOrder, priceDeliver, details, delay}, activeUser) {
        return send("initialize", {
            sender: sender,
            buyer: buyer,
            deliver: deliver,
            seller: seller,
            priceOrder: priceOrder,
            priceDeliver: priceDeliver,
            details: details,
            delay: delay
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static validateBuyer(orderKey, hash, activeUser) {
        return send("validatebuy", {
            orderKey: orderKey,
            hash: hash
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static validateSeller(orderKey, hash, activeUser) {
        return send("validatesell", {
            orderKey: orderKey,
            hash: hash
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static validateDeliver(orderKey, activeUser) {
        return send("validatedeli", {orderKey: orderKey}, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static orderReady(orderKey, activeUser) {
        return send("orderready", {orderKey: orderKey}, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static orderTaken(orderKey, source, activeUser) {
        return send("ordertaken", {
            orderKey: orderKey,
            source: source
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static orderDelivered(orderKey, source, activeUser) {
        return send("orderdelive", {
            orderKey: orderKey,
            source: source
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static async initCancel(orderKey, activeUser) {
        const accountName = await activeUser.getAccountName();
        return send("initcancel", {
            orderKey: orderKey,
            account: accountName
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static async delayCancel(orderKey, activeUser) {
        const accountName = await activeUser.getAccountName();
        return send("delaycancel", {
            orderKey: orderKey,
            sender: accountName
        }, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }

    static deleteOrder(orderKey, activeUser) {
        return send("deleteorder", {orderKey: orderKey}, process.env.REACT_APP_EOSIO_CONTRACT_USERS, activeUser);
    }
}

export default ApiServiceSender;