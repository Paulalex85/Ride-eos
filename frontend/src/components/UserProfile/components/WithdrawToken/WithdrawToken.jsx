import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Card, Form, Button } from 'react-bootstrap';
// Services and redux action
import { UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class WithdrawToken extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                quantity: "0.0000 SYS"
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { form: { quantity } } = this.state;
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
                });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { form } = this.state;

        return (
            <div className="mt-3">
                <Card.Title>Withdraw</Card.Title>
                <Form.Control
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={this.handleChange}
                />
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
