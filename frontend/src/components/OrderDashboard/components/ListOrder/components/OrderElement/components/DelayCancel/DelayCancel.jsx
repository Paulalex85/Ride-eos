import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Button } from 'react-bootstrap'
// Services and redux action
import { OrderAction, UserAction } from 'actions';
import { ApiServiceReader, ApiServiceSender } from 'services';
import {UALContext} from "ual-reactjs-renderer";

class DelayCancel extends Component {
    static contextType = UALContext;
    handleClick = async event => {
        event.preventDefault();

        const { order: { orderKey }, setOrder, setBalance, orders: { listOrders } } = this.props;
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();

        ApiServiceSender.delayCancel(orderKey, activeUser).then(() => {
            ApiServiceReader.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: name });
                ApiServiceReader.getBalanceAccountEOS(name).then((balance) => {
                    setBalance({ balance: balance });
                })
            })
        }).catch((err) => { console.error(err) });
    };

    render() {

        let isPrint = false;

        const { order: { state, date } } = this.props;

        if (state === "2" || state === "3" || state === "4") {
            if (new Date(date).getTime() < Date.now()) {
                isPrint = true;
            }
        }

        return (
            <div>
                {isPrint &&
                    <Button
                        onClick={this.handleClick}
                        variant="danger"
                        className="float-right"
                    >
                        DELAY CANCEL
                </Button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
    setBalance: UserAction.setBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(DelayCancel);
