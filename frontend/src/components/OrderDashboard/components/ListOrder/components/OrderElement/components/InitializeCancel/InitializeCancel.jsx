import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap'

import { OrderAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class InitializeCancel extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { order: { orderKey }, setOrder, setBalance, orders: { listOrders }, user: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        ApiServiceScatter.initCancel(orderKey, scatter).then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: accountScatter.name })
                ApiService.getBalanceAccountEOS(accountScatter.name).then((balance) => {
                    setBalance({ balance: balance });
                })
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        let isPrint = false;

        const { order: { state, currentActor } } = this.props;

        if (state === "1" && currentActor !== "") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <Button
                        onClick={this.handleClick}
                        variant="danger"
                        className="float-right"
                    >
                        INITIALIZATION CANCEL
                </Button>
                }
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
    setBalance: UserAction.setBalance
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(InitializeCancel);
