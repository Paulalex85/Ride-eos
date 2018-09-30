import React, { Component } from 'react';

// material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendToEOS from '../../API/SendToEOS';

class DepositUser extends Component{

    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this);
    }

    async handleFormEvent(event) {
        // stop default behaviour
        event.preventDefault();
    
        const {privateKey, account, publicKey} = this.props
        let amount = event.target.amount.value;

        const api = new SendToEOS(account,privateKey,publicKey);
        api.depositUser(amount);
    }

    render(){
        return(
            <form onSubmit={this.handleFormEvent}>
                <TextField
                    name="amount"
                    autoComplete="off"
                    label="Amount"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Deposit
                </Button>
            </form>
        )
    }
}

export default DepositUser;