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
            case 'adduser':
                api.createUser(this.state.username);
                break;
            case 'updateuser':
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
            case 'orderready':
                api.orderReady(this.state.orderKey);
                break;
            case 'ordertaken':
                api.orderTaken(this.state.orderKey, this.state.source);
                break;
            case 'orderdelive':
                api.orderDelive(this.state.orderKey, this.state.source);
                break;
            case 'initcancel':
                api.initCancel(this.state.orderKey, account);
                break;
            case 'delaycancel':
                api.delayCancel(this.state.orderKey);
                break;
            case 'newassign':
                api.newAssign(account, this.state.placeKey);
                break;
            case 'endassign':
                api.endAssign(this.state.assignmentKey);
                break;
            case 'addoffer':
                api.addOffer(this.state.orderKey,this.state.placeKey);
                break;
            case 'endoffer':
                api.endOffer(this.state.offerKey);
                break;
            case 'canceloffer':
                api.cancelOffer(this.state.offerKey);
                break;
            case 'addapply':
                api.addApply(account, this.state.offerKey);
                break;
            case 'cancelapply':
                api.cancelApply(account, this.state.offerKey);
                break;
            default:
                break;
        }
    }

    render(){
        let valueForm;
        let valueButton;
        switch (this.props.globalInfo.formToShow) {
            case 'adduser':
                valueButton = 'Create user';
                valueForm = [
                    {name:'username',label:'User name',}
                ];
                break;
            case 'updateuser':
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
            case 'orderready':
                valueButton = 'Order Ready';
                valueForm = [
                    {name:'orderKey',label:'Order Key', }
                ];
                break;
            case 'ordertaken':
                valueButton = 'Order Taken';
                valueForm = [
                    {name:'orderKey',label:'Order Key', },
                    {name:'source',label:'Source', }
                ];
                break;
            case 'orderdelive':
                valueButton = 'Order Delive';
                valueForm = [
                    {name:'orderKey',label:'Order Key', },
                    {name:'source',label:'Source', }
                ];
                break;
            case 'initcancel':
                valueButton = 'Cancel';
                valueForm = [
                    {name:'orderKey',label:'Order Key', }
                ];
                break;
            case 'delaycancel':
                valueButton = 'Cancel';
                valueForm = [
                    {name:'orderKey',label:'Order Key', }
                ];
                break;
            case 'newassign':
                valueButton = 'Assign';
                valueForm = [
                    {name:'account',label:'Account', },
                    {name:'placeKey',label:'Place Key', }
                ];
                break;
            case 'endassign':
                valueButton = 'End';
                valueForm = [
                    {name:'assignmentKey',label:'Assignment Key', },
                ];
                break;
            case 'addoffer':
                valueButton = 'Add';
                valueForm = [
                    {name:'orderKey',label:'Order Key', },
                    {name:'assignmentKey',label:'Assignment Key', }
                ];
                break;
            case 'endoffer':
                valueButton = 'End';
                valueForm = [
                    {name:'offerKey',label:'Offer Key', },
                ];
                break;
            case 'canceloffer':
                valueButton = 'Cancel';
                valueForm = [
                    {name:'offerKey',label:'Offer Key', },
                ];
                break;
            case 'addapply':
                valueButton = 'Add';
                valueForm = [
                    {name:'account',label:'Account', },
                    {name:'offerKey',label:'Offer Key', }
                ];
                break;
            case 'cancelapply':
                valueButton = 'Cancel';
                valueForm = [
                    {name:'applykey',label:'Cancel', }
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