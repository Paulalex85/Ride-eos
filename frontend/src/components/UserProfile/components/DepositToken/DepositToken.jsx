import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Form, Card, Button, InputGroup } from 'react-bootstrap';
// Services and redux action
import { UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class DepositToken extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                quantity: "0.0000"
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(process.env)
    }

    handleChange(event) {
        const { name, value, validity } = event.target;
        const { form } = this.state;

        if (validity.valid) {
            this.setState({
                form: {
                    ...form,
                    [name]: value.replace(',', '.'),
                },
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { form: { quantity } } = this.state;
        const { setUser, user: { account }, scatter: { scatter } } = this.props;

        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        let amount = quantity;
        if (!quantity.includes(".")) {
            amount += ".0000 SYS";
        } else {
            let arrayAmount = amount.split('.');
            amount = arrayAmount[0] + ".";
            if (arrayAmount.length > 1) {
                let digit = arrayAmount[1];
                while (digit.length < 4) {
                    digit += 0;
                }
                amount += digit;
            } else {
                amount += "0000"
            }
            amount += " SYS"
        }

        ApiServiceScatter.updatePermission(accountScatter, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter).then(() => {
            ApiServiceScatter.deposit(amount, scatter).then(() => {
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
            <div>
                <Card.Title>Deposit</Card.Title>
                <InputGroup >
                    <Form.Control
                        pattern="^[0-9]*([,.][0-9]{0,4})?$"
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="symbol">SYS</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <Button
                    className="mt-3"
                    onClick={this.handleSubmit}
                    variant='primary'>
                    DEPOSIT
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositToken);
