import Eos from 'eosjs';

export default class SendToEOS {

    createUser(privateKey, account, username){
        let actionName = "add";
        let actionData = {
            account: account,
            username: username,
        };
        const result = this.send(privateKey,account, actionName, actionData, "rideos");
        console.log(result);
    }

    async send(privateKey, sender, actionName, actionData, contractDestination) {
        // eosjs function call: connect to the blockchain
        const eos = Eos({keyProvider: privateKey});
        const result = await eos.transaction({
            actions: [{
                account: contractDestination,
                name: actionName,
                authorization: [{
                    actor: sender,
                    permission: 'active',
                }],
                data: actionData,
            }],
        });

        return result;
    }
}