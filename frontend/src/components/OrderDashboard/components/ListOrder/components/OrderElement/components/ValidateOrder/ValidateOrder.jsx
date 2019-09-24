import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Button } from 'react-bootstrap'
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService, ApiServiceScatter, KeyGenerator } from 'services';

class ValidateOrder extends Component {

    handleClick = (event) => {
        event.preventDefault();

        const { order: { orderKey }, setOrder, orders: { listOrders }, scatter: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        this.validateAPI().then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: accountScatter.name });
            })
        }).catch((err) => { console.error(err) });
    }

    validateAPI = async () => {
        const { order, order: { currentActor, orderKey }, scatter: { scatter } } = this.props;

        if (currentActor === "deliver") {
            await ApiServiceScatter.validateDeliver(orderKey, scatter)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "seller") {

            let keyObject = await KeyGenerator.createKeyForDelivery(order, scatter)
            KeyGenerator.storeKey(orderKey, keyObject.key, keyObject.hash, "seller");
            await ApiServiceScatter.validateSeller(orderKey, keyObject.hash, scatter).catch((err) => { console.error(err) });

        } else if (currentActor === "buyer") {
            let keyObject = await KeyGenerator.createKeyForDelivery(order, scatter)
            KeyGenerator.storeKey(orderKey, keyObject.key, keyObject.hash, "buyer");
            await ApiServiceScatter.updatePermission(process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter).catch((err) => { console.error(err) });
            await ApiServiceScatter.validateBuyer(orderKey, keyObject.hash, scatter).catch((err) => { console.error(err) });
        }
    }

    setCanValidate() {
        const { order } = this.props;

        if (order.state === "1") {
            if (order.currentActor === "seller") {
                if (order.validateSeller === "0") {
                    return true;
                } else {
                    return false;
                }
            } else if (order.currentActor === "deliver") {
                if (order.validateDeliver === "0") {
                    return true;
                } else {
                    return false;
                }
            } else if (order.currentActor === "buyer") {
                if (order.validateBuyer === "0") {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false
    }

    render() {

        let canValidate = this.setCanValidate();

        return (
            <div>
                {canValidate &&
                    <Button
                        onClick={this.handleClick}
                        variant='primary'
                    >
                        VALIDATE
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

export default connect(mapStateToProps, mapDispatchToProps)(ValidateOrder);