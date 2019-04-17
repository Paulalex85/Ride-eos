import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup, Collapse, Col, Row, Badge, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';

import { ValidateOrder, OrderReady, OrderTaken, OrderDelivered, InitializeCancel, DelayCancel, DeleteOrder } from './components';

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
                        <h5>Users</h5>
                        <Row className="mb-3">
                            <Col>
                                <Badge className="mr-3" variant="info">Buyer</Badge>
                                {order.buyer}
                            </Col>
                            <Col>
                                <Badge className="mr-3" variant="info">Seller</Badge>
                                {order.seller}
                            </Col>
                            <Col>
                                <Badge className="mr-3" variant="info">Deliver</Badge>
                                {order.deliver}
                            </Col>
                        </Row>
                        <h5>Delay</h5>
                        <Row className="mb-3">
                            <Col>
                                Creation : {order.date.toLocaleTimeString() + " " + order.date.toLocaleDateString()}
                            </Col>
                            <Col>
                                Max delivery : {order.dateDelay.toLocaleTimeString() + " " + order.dateDelay.toLocaleDateString()}
                            </Col>
                        </Row>
                        <h5>Price</h5>
                        <Row className="mb-3">
                            <Col>
                                Seller : {order.priceOrder}
                            </Col>
                            <Col>
                                Deliver : {order.priceDeliver}
                            </Col>
                        </Row>
                        <h5>Order Validation</h5>
                        <Row className="mb-3">
                            <Col className="sm-1">
                                {order.validateBuyer === "1" ?
                                    <Badge variant="success">Buyer</Badge>
                                    :
                                    <Badge variant="danger">Buyer</Badge>
                                }
                            </Col>
                            <Col className="sm-1">
                                {order.validateSeller === "1" ?
                                    <Badge variant="success">Seller</Badge>
                                    :
                                    <Badge variant="danger">Seller</Badge>
                                }
                            </Col>
                            <Col className="sm-1">
                                {order.validateDeliver === "1" ?
                                    <Badge variant="success">Deliver</Badge>
                                    :
                                    <Badge variant="danger">Deliver</Badge>
                                }
                            </Col>
                        </Row>
                        <h5>Infos</h5>
                        <Row className="mb-3">
                            <Col>
                                {order.details}
                            </Col>
                        </Row>

                        <ButtonToolbar className="justify-content-between">
                            <ButtonGroup>
                                <ValidateOrder order={order} />
                                <OrderReady order={order} />
                                <OrderTaken order={order} />
                                <OrderDelivered order={order} />
                            </ButtonGroup>
                            <ButtonGroup>
                                <InitializeCancel order={order} />
                                <DelayCancel order={order} />
                                <DeleteOrder order={order} />
                            </ButtonGroup>
                        </ButtonToolbar>
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
