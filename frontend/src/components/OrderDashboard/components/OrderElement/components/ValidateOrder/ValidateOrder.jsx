import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService, KeyGenerator } from 'services';

class ValidateOrder extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
        this.validateAPI = this.validateAPI.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { orderKey, setOrder, user: { account }, orders: { listOrders } } = this.props;

        this.validateAPI().then(() => {
            ApiService.getOrder(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account });
            })
        }).catch((err) => { console.error(err) });
    }

    async validateAPI() {
        const { order: { currentActor, orderKey } } = this.props;

        if (currentActor === "deliver") {

            await ApiService.validateDeliver(orderKey)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "seller") {

            let key = KeyGenerator.generateKey();
            let hash = KeyGenerator.generateHash(key);
            KeyGenerator.storeKey(orderKey, key, hash, "seller");

            await ApiService.validateSeller(orderKey, hash)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "buyer") {

            let key = KeyGenerator.generateKey();
            let hash = KeyGenerator.generateHash(key);
            KeyGenerator.storeKey(orderKey, key, hash, "buyer");

            await ApiService.validateBuyer(orderKey, hash)
                .catch((err) => { console.error(err) });
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
                        className="green"
                        variant='contained'
                        color='primary'
                    >
                        VALIDATE
                </Button>
                }
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(ValidateOrder);
