import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ValidateOrder from '../ValidateOrder';

class OrderElement extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // const { order, user: { account } } = this.props;

        // if (order.deliver === account) {
        //     if (order.validateDeliver === "0") {
        //         this.state = {
        //             currentActor: "deliver",
        //             canValidate: true
        //         };
        //     } else {
        //         this.state = {
        //             currentActor: "deliver",
        //             canValidate: false
        //         };
        //     }

        // } else if (order.buyer === account) {
        //     if (order.validateBuyer === "0") {
        //         this.state = {
        //             currentActor: "buyer",
        //             canValidate: true
        //         };
        //     } else {
        //         this.state = {
        //             currentActor: "buyer",
        //             canValidate: false
        //         };
        //     }
        // } else if (order.seller === account) {
        //     if (order.validateSeller === "0") {
        //         this.state = {
        //             currentActor: "seller",
        //             canValidate: true
        //         };
        //     } else {
        //         this.state = {
        //             currentActor: "seller",
        //             canValidate: false
        //         };
        //     }
        // } else {
        //     this.state = {
        //         currentActor: "",
        //         canValidate: false
        //     };
        // }

        // this.handleClickValidateOrder = this.handleClickValidateOrder.bind(this);
    }

    // handleClickValidateOrder() {
    //     const { order } = this.props;
    //     console.log("dans le handle")
    //     if (this.state.canValidate === true) {
    //         if ((order.validateBuyer === 1 && this.state.currentActor === "buyer")
    //             || (order.validateDeliver === 1 && this.state.currentActor === "deliver")
    //             || (order.validateSeller === 1 && this.state.currentActor === "seller")) {
    //             this.setState({
    //                 ...this.state,
    //                 canValidate: false
    //             })
    //         }
    //     }
    // }

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
