import React, { Component } from 'react';

// material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendToEOS from '../API/SendToEOS';

class FormAPI extends Component{

    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    state = {
        username: '',
        amount: '',
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.globalInfo.formToShow !== this.props.globalInfo.formToShow;
    }

    updateInputValue(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    async handleFormEvent(event) {
        // stop default behaviour
        event.preventDefault();

        const {privateKey, account, publicKey} = this.props.globalInfo;

        let api = new SendToEOS(account,privateKey,publicKey);
        switch (this.props.globalInfo.formToShow) {
            case 'add':
                api.createUser(this.state.username);
                break;
            case 'update':
                api.updateUser(this.state.username);
                break;
            case 'deposit':
                api.depositUser(this.state.amount);
                break;
            case 'withdraw':
                api.withdrawUser(this.state.amount);
                break;
            default:
                break;
        }
    }

    render(){
        let valueForm;
        let valueButton;
        switch (this.props.globalInfo.formToShow) {
            case 'add':
                valueButton = 'Create user';
                valueForm = [
                    {
                        name:'username',
                        label:'User name',
                    }
                ];
                break;
            case 'update':
                valueButton = 'Update user';
                valueForm = [
                    {
                        name:'username',
                        label:'User name',
                    }
                ];
                break;
            case 'deposit':
                valueButton = 'Deposit';
                valueForm = [
                    {
                        name:'amount',
                        label:'Amount',
                    }
                ];
                break;
            case 'withdraw':
                valueButton = 'Withdraw';
                valueForm = [
                    {
                        name:'amount',
                        label:'Amount',
                    }
                ];
                break;
            default:
                break;
        }

        const formField = valueForm.map((field) =>
            <TextField
                key={field.name}
                name={field.name}
                autoComplete='off'
                label={field.label}
                margin='normal'
                onChange={this.updateInputValue}
            />
        );

        return(
            <form onSubmit={this.handleFormEvent}>
                {formField}
                <Button
                    variant='contained'
                    color='primary'
                    type='submit'>
                    {valueButton}
                </Button>
            </form>
        );
    }
}

export default FormAPI;