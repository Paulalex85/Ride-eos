import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class OrderReady extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { order: { orderKey }, setOrder, user: { account }, orders: { listOrders }, scatter: { scatter } } = this.props;

        ApiServiceScatter.orderReady(orderKey, scatter).then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        const { order } = this.props;

        let isPrint = false;

        if (order.state === "2" && order.currentActor === "seller") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <Button
                        onClick={this.handleClick}
                        className="green"
                        variant='contained'
                        color='primary'
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
