import React, {Component} from 'react';
import {connect} from 'react-redux';
// Components
import {Button} from 'react-bootstrap'
// Services and redux action
import {OrderAction} from 'actions';
import {ApiService, ApiServiceScatter} from 'services';
import {UALContext} from "ual-reactjs-renderer";

class OrderReady extends Component {
    static contextType = UALContext;

    handleClick = async (event) => {
        event.preventDefault();

        const {order: {orderKey}, setOrder, orders: {listOrders}} = this.props;
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();

        ApiServiceScatter.orderReady(orderKey, activeUser).then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({listOrders: listOrders, order: order, account: name});
            })
        }).catch((err) => {
            console.error(err)
        });
    };

    render() {

        const {order} = this.props;

        let isPrint = false;

        if (order.state === "2" && order.currentActor === "seller") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                <Button
                    onClick={this.handleClick}
                    variant='primary'
                >
                    ORDER READY
                </Button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderReady);
