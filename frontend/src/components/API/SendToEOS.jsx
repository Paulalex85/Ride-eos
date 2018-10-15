import Eos from 'eosjs';

export default class SendToEOS {
    constructor(account, privateKey, publicKey){  
        this.privateKey = privateKey;
        this.sender = account;
        this.publicKey = publicKey;
    }

    //Users API
    createUser(username){
        let actionName = "add";
        let actionData = {
            account: this.sender,
            username: username,
        };
        const result = this.send(actionName, actionData, "rideos");
        console.log(result);
    }

    updateUser(username){
        let actionName = "update";
        let actionData = {
            account: this.sender,
            username: username,
        };
        const result = this.send(actionName, actionData, "rideos");
        console.log(result);
    }

    depositUser(quantity){
        let actionName = "deposit";
        let actionData = {
            account: this.sender,
            quantity: quantity,
        };
        this.auth("rideos").then(this.send(actionName, actionData, "rideos"));
    }

    withdrawUser(quantity){
        let actionName = "withdraw";
        let actionData = {
            account: this.sender,
            quantity: quantity,
        };
        const result = this.send(actionName, actionData, "rideos");
        console.log(result);
    }

    //Orders API
    needDeliver(seller,priceOrder, priceDeliver, details, delay){
        let actionName = "needdeliver";
        let actionData = {
            buyer: this.sender,
            seller :seller,
            priceOrder: priceOrder,
            priceDeliver: priceDeliver,
            details: details,
            delay: delay,
        }
        const result = this.send(actionName, actionData, "rideor");
        console.log(result);
    }

    deliverFound(deliver, orderKey){
        let actionName = "deliverfound";
        let actionData = {
            deliver: deliver,
            orderKey: orderKey,
        };
        const result = this.send(actionName, actionData, "rideor");
        console.log(result);
    }

    initialize(seller,deliver,priceOrder, priceDeliver, details, delay){
        let actionName = "initialize";
        let actionData = {
            buyer: this.sender,
            seller :seller,
            deliver: deliver,
            priceOrder: priceOrder,
            priceDeliver: priceDeliver,
            details: details,
            delay: delay,
        }
        const result = this.send(actionName, actionData, "rideor");
        console.log(result);
    }

    validateBuy(orderKey,commitment){
        let actionName = "validatebuy";
        let actionData = {
            orderKey: orderKey,
            commitment: commitment,
        };
        this.auth("rideor").then(this.send(actionName, actionData, "rideor"));
    }

    validateSell(orderKey,commitment){
        let actionName = "validatesell";
        let actionData = {
            orderKey: orderKey,
            commitment: commitment,
        };
        this.send(actionName, actionData, "rideor");
    }

    validateDeli(orderKey){
        let actionName = "validatedeli";
        let actionData = {
            orderKey: orderKey,
        };
        this.send(actionName, actionData, "rideor");
    }

    orderReady(orderKey){
        let actionName = "orderready";
        let actionData = {
            orderKey: orderKey,
        };
        this.send(actionName, actionData, "rideor");
    }

    orderTaken(orderKey,source){
        let actionName = "ordertaken";
        let actionData = {
            orderKey: orderKey,
            source: source,
        };
        this.send(actionName, actionData, "rideor");
    }

    orderDelive(orderKey,source){
        let actionName = "orderdelive";
        let actionData = {
            orderKey: orderKey,
            source: source,
        };
        this.send(actionName, actionData, "rideor");
    }

    initCancel(orderKey,account){
        let actionName = "initcancel";
        let actionData = {
            orderKey: orderKey,
            account: account,
        };
        this.send(actionName, actionData, "rideor");
    }

    delayCancel(orderKey){
        let actionName = "delaycancel";
        let actionData = {
            orderKey: orderKey
        };
        this.send(actionName, actionData, "rideor");
    }

    //Markets API
    newAssign(account, placekey){
        let actionName = "newassign";
        let actionData = {
            account: account,
            placeKey: placekey
        };
        this.send(actionName, actionData, "rideom");
    }

    endAssign(assignmentKey){
        let actionName = "endassign";
        let actionData = {
            assignmentKey: assignmentKey
        };
        this.send(actionName, actionData, "rideom");
    }

    addOffer(orderkey, placekey){
        let actionName = "addoffer";
        let actionData = {
            orderKey: orderkey,
            placeKey: placekey
        };
        this.send(actionName, actionData, "rideom");
    }

    endOffer(offerkey){
        let actionName = "endoffer";
        let actionData = {
            offerKey: offerkey
        };
        this.send(actionName, actionData, "rideom");
    }

    cancelOffer(offerkey){
        let actionName = "canceloffer";
        let actionData = {
            offerKey: offerkey
        };
        this.send(actionName, actionData, "rideom");
    }

    addApply(account,offerkey){
        let actionName = "addapply";
        let actionData = {
            account: account,
            offerKey: offerkey
        };
        this.send(actionName, actionData, "rideom");
    }

    cancelApply(applykey){
        let actionName = "cancelapply";
        let actionData = {
            applyKey: applykey
        };
        this.send(actionName, actionData, "rideom");
    }

    async auth(contractDestination){
        const eos = Eos({keyProvider: this.privateKey});

        const auth = {
            "threshold": 1,
            "keys": [{
                "key": this.publicKey,
                "weight": 1
            }],
            "accounts": [{
                "permission":{
                    "actor":contractDestination,
                    "permission":"active"
                }, "weight":1
            }]
        }

        const tx = {
            account: this.sender,
            permission: 'active',
            parent: 'owner',
            auth: auth
        };

        return await eos.updateauth(tx);
    }

    async send(actionName, actionData, contractDestination) {
        const eos = Eos({keyProvider: this.privateKey});
        
        const result = await eos.transaction({
            actions: [{
                account: contractDestination,
                name: actionName,
                authorization: [{
                    actor: this.sender,
                    permission: 'active',
                }],
                data: actionData,
            }],
        });

        return result;
    }
}