import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup, Collapse, Col } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';

import { ValidateOrder, OrderReady, OrderTaken, OrderDelivered, InitializeCancel, DelayCancel } from './components';

class OrderElement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    render() {
        const { order } = this.props;
        const { open } = this.state;

        let stateTitle = "";
        let colorListGroup = "";
        if (order.state === "1") {
            stateTitle = "Order initialization"
        }
        else if (order.state === "2") {
            stateTitle = "Wait seller preparing order"
            colorListGroup = "info"
        }
        else if (order.state === "3") {
            stateTitle = "Order ready to be delivered"
            colorListGroup = "info"
        }
        else if (order.state === "4") {
            stateTitle = "Delivery in progress"
            colorListGroup = "info"
        }
        else if (order.state === "5") {
            stateTitle = "Order delivered"
            colorListGroup = "success"
        }
        else if (order.state === "98") {
            stateTitle = "Order cancelled"
            colorListGroup = "danger"
        }
        else if (order.state === "99") {
            stateTitle = "Order cancelled"
            colorListGroup = "danger"
        }

        return (
            <Col className="col-sm-6 col-sm-offset-3">
                <ListGroup.Item
                    action
                    variant={colorListGroup}
                    className="text-center"
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="collapse-order"
                    aria-expanded={open}>
                    <span className="float-left">
                        Order #{order.orderKey}
                    </span>
                    <span>
                        {stateTitle}
                    </span>
                    {open ?
                        <Octicon className="float-right" size='medium' icon={getIconByName("chevron-up")} />
                        :
                        <Octicon className="float-right" size='medium' icon={getIconByName("chevron-down")} />
                    }
                </ListGroup.Item>
                <Collapse in={this.state.open}>
                    <ListGroup.Item id="collapse-order">
                        <Typography>Buyer : {order.buyer}</Typography>
                        <Typography>Seller : {order.seller}</Typography>
                        <Typography>Deliver : {order.deliver}</Typography>
                        <Typography>State : {order.state}</Typography>
                        <Typography>Date : {order.date}</Typography>
                        <Typography>Date delay : {order.dateDelay}</Typography>
                        <Typography>Order Price : {order.priceOrder}</Typography>
                        <Typography>Deliver Price : {order.priceDeliver}</Typography>
                        <Typography>Buyer validate : {order.validateBuyer}</Typography>
                        <Typography>Seller validate : {order.validateSeller}</Typography>
                        <Typography>Deliver validate : {order.validateDeliver}</Typography>
                        <Typography>Details : {order.details}</Typography>
                        <Typography>Delay : {order.delay}</Typography>
                        <Typography>Place Key : {order.placeKey}</Typography>

                        <ValidateOrder order={order} />
                        <OrderReady order={order} />
                        <OrderTaken order={order} />
                        <OrderDelivered order={order} />
                        <InitializeCancel order={order} />
                        <DelayCancel order={order} />
                    </ListGroup.Item>
                </Collapse>
            </Col>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(OrderElement);
