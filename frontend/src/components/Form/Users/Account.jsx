import React, { Component } from 'react';
import PropTypes from 'prop-types'

// material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Account extends Component{

    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this);
    }

    PropTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    handleFormEvent(event) {
        event.preventDefault();

        const privateKey = event.target.privateKey.value;
        const account = event.target.account.value;
        const publicKey = event.target.publicKey.value;

        this.props.onSubmit(account, privateKey,publicKey);
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
                    name="publicKey"
                    autoComplete="off"
                    label="Public Key"
                    margin="normal"
                />
                <TextField
                    name="privateKey"
                    autoComplete="off"
                    label="Private Key"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Set
                </Button>
            </form>
        )
    }
}

export default Account;