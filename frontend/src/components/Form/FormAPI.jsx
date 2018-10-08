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
            case 'needdeliver':
                api.needDeliver(this.state.seller,this.state.priceOrder,this.state.priceDeliver,this.state.details,this.state.delay);
                break;
            case 'deliverfound':
                api.deliverFound(this.state.deliver,this.state.orderKey);
                break;
            case 'initialize':
                api.initialize(this.state.seller,this.state.deliver,this.state.priceOrder,this.state.priceDeliver,this.state.details,this.state.delay);
                break;
            case 'validatebuy':
                api.validateBuy(this.state.orderKey,this.state.commitment);
                break;
            case 'validatesell':
                api.validateSell(this.state.orderKey,this.state.commitment);
                break;
            case 'validatedeli':
                api.validateDeli(this.state.orderKey);
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
                    {name:'username',label:'User name',}
                ];
                break;
            case 'update':
                valueButton = 'Update user';
                valueForm = [
                    {name:'username',label:'User name',}
                ];
                break;
            case 'deposit':
                valueButton = 'Deposit';
                valueForm = [
                    {name:'amount',label:'Amount',}
                ];
                break;
            case 'withdraw':
                valueButton = 'Withdraw';
                valueForm = [
                    {name:'amount',label:'Amount', }
                ];
                break;
            case 'needdeliver':
                valueButton = 'Send Request';
                valueForm = [
                    {name:'seller',label:'Seller',},
                    {name:'priceOrder',label:'Price Order',},
                    {name:'priceDeliver',label:'Price Deliver',},
                    {name:'details',label:'Details',},
                    {name:'delay',label:'Delay',}
                ];
                break;
            case 'deliverfound':
                valueButton = 'Found';
                valueForm = [
                    {name:'deliver',label:'Deliver', },
                    {name:'orderKey',label:'Order Key', }
                ];
                break;
            case 'initialize':
                valueButton = 'Create order';
                valueForm = [
                    {name:'seller',label:'Seller',},
                    {name:'deliver',label:'Deliver',},
                    {name:'priceOrder',label:'Price Order',},
                    {name:'priceDeliver',label:'Price Deliver',},
                    {name:'details',label:'Details',},
                    {name:'delay',label:'Delay',}
                ];
                break;
            case 'validatebuy':
                valueButton = 'Validate';
                valueForm = [
                    {name:'orderKey',label:'Order Key', },
                    {name:'commitment',label:'Hash', }
                ];
                break;
            case 'validatesell':
                valueButton = 'Validate';
                valueForm = [
                    {name:'orderKey',label:'Order Key', },
                    {name:'commitment',label:'Hash', }
                ];
                break;
            case 'validatedeli':
                valueButton = 'Validate';
                valueForm = [
                    {name:'orderKey',label:'Order Key', }
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