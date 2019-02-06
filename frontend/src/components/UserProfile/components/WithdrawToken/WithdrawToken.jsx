import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
            <div className="Withdraw">
                <div className="title">Withdraw</div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextField
                        name="quantity"
                        value={form.quantity}
                        label="Quantity"
                        onChange={this.handleChange}
                    />
                    <div className="bottom">
                        <Button
                            type="submit"
                            className="green"
                            variant='contained'
                            color='primary'>
                            WITHDRAW
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawToken);
