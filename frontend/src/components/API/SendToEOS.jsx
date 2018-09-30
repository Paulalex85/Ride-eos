import Eos from 'eosjs';

export default class SendToEOS {
    constructor(account, privateKey, publicKey){  
        this.privateKey = privateKey;
        this.sender = account;
        this.publicKey = publicKey;
    }

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