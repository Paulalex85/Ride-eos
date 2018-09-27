import React, { Component } from 'react';

// material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateUser extends Component{

    constructor(props) {
        super(props)
        this.api = this.props.api;
        this.handleFormEvent = this.handleFormEvent.bind(this);
    }

    async handleFormEvent(event) {
        // stop default behaviour
        event.preventDefault();
    
        // collect form data
        let account = event.target.account.value;
        let privateKey = event.target.privateKey.value;
        let userName = event.target.userName.value;
    
        this.api.createUser(privateKey, account,userName);
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