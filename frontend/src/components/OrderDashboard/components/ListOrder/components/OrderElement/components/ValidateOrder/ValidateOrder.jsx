import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Button } from 'react-bootstrap'
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService, ApiServiceScatter, KeyGenerator } from 'services';

class ValidateOrder extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.validateAPI = this.validateAPI.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { order: { orderKey }, setOrder, user: { account }, orders: { listOrders } } = this.props;

        this.validateAPI().then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account });
            })
        }).catch((err) => { console.error(err) });
    }

    async validateAPI() {
        const { order: { currentActor, orderKey }, scatter: { scatter } } = this.props;

        if (currentActor === "deliver") {

            await ApiServiceScatter.validateDeliver(orderKey, scatter)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "seller") {

            let key = KeyGenerator.generateKey();
            let hash = KeyGenerator.generateHash(key);
            KeyGenerator.storeKey(orderKey, key, hash, "seller");

            await ApiServiceScatter.validateSeller(orderKey, hash, scatter)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "buyer") {

            let key = KeyGenerator.generateKey();
            let hash = KeyGenerator.generateHash(key);
            KeyGenerator.storeKey(orderKey, key, hash, "buyer");
            const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

            await ApiServiceScatter.updatePermission(accountScatter, process.env.REACT_APP_EOSIO_CONTRACT_USERS, scatter).catch((err) => { console.error(err) });
            await ApiServiceScatter.validateBuyer(orderKey, hash, scatter).catch((err) => { console.error(err) });
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