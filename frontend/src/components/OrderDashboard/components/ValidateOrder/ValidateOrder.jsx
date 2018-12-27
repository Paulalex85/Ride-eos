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
            ApiService.getOrder(orderKey)
                .then((order) => {
                    setOrder({ listOrders: listOrders, order: order, account });
                })
                .catch(err => {
                    this.setState({ error: err.toString() });
                });
        });
    }

    async validateAPI() {
        const { currentActor, orderKey } = this.props;

        if (currentActor === "deliver") {

            await ApiService.validateDeliver(orderKey)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "seller") {

            let key = KeyGenerator.generateKey();
            let hash = KeyGenerator.generateHash(key);
            KeyGenerator.storeKey(orderKey, key, hash);

            await ApiService.validateSeller(orderKey, hash)
                .catch((err) => { console.error(err) });

        } else if (currentActor === "buyer") {

            let key = KeyGenerator.generateKey();
            let hash = KeyGenerator.generateHash(key);
            KeyGenerator.storeKey(orderKey, key, hash);

            await ApiService.validateBuyer(orderKey, hash)
                .catch((err) => { console.error(err) });
        }
    }

    render() {

        return (
            <div>
                <Button
                    onClick={this.handleClick}
                    className="green"
                    variant='contained'
                    color='primary'
                >
                    VALIDATE
                </Button>
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
