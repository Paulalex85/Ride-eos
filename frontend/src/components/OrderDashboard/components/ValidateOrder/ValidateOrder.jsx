import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService } from 'services';

import ecc from 'eosjs-ecc'
import randomBytes from 'random-bytes'

class ValidateOrder extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.state = {
            error: ''
        }

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
        this.validateAPI = this.validateAPI.bind(this);
    }

    // Runs on every keystroke to updateuser the React state
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
        let key = ecc.sha256(randomBytes.sync(32));
        let hash = ecc.sha256(key);
        const { currentActor, orderKey } = this.props;

        switch (currentActor) {
            case "deliver":
                await ApiService.validateDeliver(orderKey)
                    .catch(err => {
                        this.setState({ error: err.toString() });
                    });
                break;
            case "seller":
                await ApiService.validateSeller(orderKey, hash)
                    .catch(err => {
                        this.setState({ error: err.toString() });
                    });
                break;
            case "buyer":
                await ApiService.validateBuyer(orderKey, hash)
                    .catch(err => {
                        this.setState({ error: err.toString() });
                    });
                break;

            default:
                break;
        }
    }

    render() {

        const { error } = this.state;

        return (
            <div>
                <Button
                    onClick={this.handleClick}
                >
                    VALIDATE
                </Button>
                <div className="field form-error">
                    {error && <span className="error">{error}</span>}
                </div>
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
