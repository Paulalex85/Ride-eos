import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup, Collapse, Col } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

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

        return (
            <Col className="col-sm-6 col-sm-offset-3">
                <ListGroup.Item
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="collapse-order"
                    aria-expanded={open}>
                    Order #{order.orderKey}
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
