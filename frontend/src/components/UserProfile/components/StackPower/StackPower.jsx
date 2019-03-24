import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Card, Button } from 'react-bootstrap';

import { StackpowerAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';
import CurrencyInput from '../CurrencyInput'

class StackPower extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.getStackpower();

        this.state = {
            quantity: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getStackpower = this.getStackpower.bind(this);
    }

    getStackpower() {
        const { setListStackpower, user: { account }, scatter: { scatter } } = this.props;

        ApiService.getStackByAccount(account, scatter).then(stack => {
            setListStackpower({ listStackpower: stack, account: account });
        }).catch((err) => { console.error(err) });
    }

    handleChange = (amount) => {
        this.setState({
            quantity: amount
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { quantity } = this.state;
        const { setUser, scatter: { scatter }, user: { account } } = this.props;

        return ApiServiceScatter.stackpow(quantity, scatter).then(() => {
            ApiService.getUserByAccount(account).then(user => {
                setUser({
                    account: user.account,
                    username: user.username,
                    balance: user.balance,
                });
            });
            this.getStackpower();
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { stackpower: { balanceCurrent } } = this.props;

        return (
            <div>
                <Card.Title>Stackpower balance</Card.Title>
                <Card.Text>
                    {balanceCurrent}
                </Card.Text>
                <Card.Title>Add Stackpower</Card.Title>
                <CurrencyInput handleChange={this.handleChange} />
                <Button
                    className="mt-3"
                    onClick={this.handleSubmit}
                    variant='primary'>
                    ADD
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListStackpower: StackpowerAction.setListStackpower,
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(StackPower);