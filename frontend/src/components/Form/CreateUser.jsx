import React, { Component } from 'react';
import Eos from 'eosjs';

// material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateUser extends Component{

    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this);
    }

    async handleFormEvent(event) {
        // stop default behaviour
        event.preventDefault();
    
        // collect form data
        let account = event.target.account.value;
        let privateKey = event.target.privateKey.value;
        let userName = event.target.userName.value;
    
        // prepare variables for the switch below to send transactions
        let actionName = "add";
        let actionData = {
            account: account,
            username: userName,
        };
    
        // eosjs function call: connect to the blockchain
        const eos = Eos({keyProvider: privateKey});
        const result = await eos.transaction({
          actions: [{
            account: "rideos",
            name: actionName,
            authorization: [{
              actor: account,
              permission: 'active',
            }],
            data: actionData,
          }],
        });
    
        console.log(result);
    }

    render(){
        return(
            <form onSubmit={this.handleFormEvent}>
                <TextField
                    name="account"
                    autoComplete="off"
                    label="Account"
                    margin="normal"
                />
                <TextField
                    name="privateKey"
                    autoComplete="off"
                    label="Private key"
                    margin="normal"
                />
                <TextField
                    name="userName"
                    autoComplete="off"
                    label="User name"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Create user
                </Button>
            </form>
        )
    }
}

export default CreateUser;