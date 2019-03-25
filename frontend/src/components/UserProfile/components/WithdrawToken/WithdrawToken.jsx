import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Card, Button } from 'react-bootstrap';
// Services and redux action
import { UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';
import CurrencyInput from '../CurrencyInput'

class WithdrawToken extends Component {
    constructor(props) {
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
        const { setUser, user: { account }, scatter: { scatter } } = this.props;

        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        ApiServiceScatter.updatePermission(accountScatter, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter).then(() => {
            ApiServiceScatter.withdraw(quantity, scatter).then(() => {
                ApiService.getUserByAccount(account).then(user => {
                    setUser({
                        account: user.account,
                        username: user.username,
                        balance: user.balance,
                    });
                    this.props.update();
                });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        return (
            <div className="mt-3">
                <Card.Title>Withdraw</Card.Title>
                <CurrencyInput handleChange={this.handleChange} />
                <Button
                    className="mt-3"
                    onClick={this.handleSubmit}
                    variant='primary'>
                    WITHDRAW
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawToken);
