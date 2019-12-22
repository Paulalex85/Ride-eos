import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button} from 'react-bootstrap'

import {OrderAction, UserAction} from 'actions';
import {ApiServiceReader, ApiServiceSender} from 'services';
import {UALContext} from "ual-reactjs-renderer";

class InitializeCancel extends Component {
    static contextType = UALContext;

    handleClick = async event => {
        event.preventDefault();

        const {order: {orderKey}, setOrder, setBalance, orders: {listOrders}} = this.props;
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();
        ApiServiceSender.initCancel(orderKey, activeUser).then(() => {
            ApiServiceReader.getOrderByKey(orderKey).then((order) => {
                setOrder({listOrders: listOrders, order: order, account: name});
                ApiServiceReader.getBalanceAccountEOS(name).then((balance) => {
                    setBalance({balance: balance});
                })
            })
        }).catch((err) => {
            console.error(err)
        });
    };

    render() {
        let isPrint = false;

        const {order: {state, currentActor}} = this.props;

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
