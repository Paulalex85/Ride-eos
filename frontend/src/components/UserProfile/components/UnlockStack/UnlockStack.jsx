import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Card, Button } from 'react-bootstrap';

import { StackpowerAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';
import CurrencyInput from '../CurrencyInput'


class UnlockStack extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.state = {
            quantity: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (amount) => {
        this.setState({
            quantity: amount
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { quantity } = this.state;
        const { setListStackpower, scatter: { scatter }, user: { account }, stackpower: { stackKeyCurrent } } = this.props;

        if (stackKeyCurrent !== undefined) {
            return ApiServiceScatter.unlockpow(quantity, stackKeyCurrent, scatter).then(() => {
                ApiService.getStackByAccount(account, scatter).then(stack => {
                    setListStackpower({ listStackpower: stack, account: account });
                }).catch((err) => { console.error(err) });
            }).catch((err) => { console.error(err) });
        }
    }

    render() {

        return (
            <div className="mt-3">
                <Card.Title>Unlock Stackpower</Card.Title>
                <CurrencyInput handleChange={this.handleChange} />
                <Button
                    className="mt-3"
                    onClick={this.handleSubmit}
                    variant='primary'>
                    UNLOCK
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

export default connect(mapStateToProps, mapDispatchToProps)(UnlockStack);