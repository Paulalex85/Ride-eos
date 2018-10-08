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