import React, { Component } from 'react';

// material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendToEOS from '../../API/SendToEOS';

class CreateUser extends Component{

    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this);
    }

    async handleFormEvent(event) {
        // stop default behaviour
        event.preventDefault();
    
        const {privateKey, account,publicKey} = this.props
        // collect form data
        let userName = event.target.userName.value;
        const api = new SendToEOS(account,privateKey,publicKey);
        api.createUser(userName);
    }

    render(){
        return(
            <form onSubmit={this.handleFormEvent}>
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