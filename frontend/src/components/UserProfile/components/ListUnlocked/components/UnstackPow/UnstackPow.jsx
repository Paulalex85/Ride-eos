import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Button } from 'react-bootstrap';

import { StackpowerAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class UnstackPow extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { setListStackpower, setUser, scatter: { scatter }, user: { account }, stack: { stackKey } } = this.props;
        return ApiServiceScatter.unstackpow(stackKey, scatter).then(() => {
            ApiService.getStackByAccount(account, scatter).then(stack => {
                setListStackpower({ listStackpower: stack, account: account });
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
        const { stack } = this.props;

        let isUnstackable = (new Date(stack.endAssignment).getTime() < Date.now() && new Date(stack.endAssignment).getTime() !== 0);

        return (
            <tr>
                <td>{stack.balance}</td>
                <td>{stack.endAssignment.toString()}</td>
                <td>
                    {isUnstackable &&
                        <Button
                            onClick={this.handleClick}
                            variant="success"
                            size="sm">
                            GET
                        </Button>
                    }
                </td>
            </tr>

        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListStackpower: StackpowerAction.setListStackpower,
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnstackPow);