import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ValidateOrder from '../ValidateOrder';

class OrderElement extends Component {

    render() {
        const { order } = this.props;

        return (
            <Card >
                <CardContent>
                    <Typography>Order key : {order.orderKey}</Typography>
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
                </CardContent>
                {order.canValidate &&
                    <ValidateOrder
                        orderKey={order.orderKey}
                        currentActor={order.currentActor}
                    />
                }
            </Card>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(OrderElement);
