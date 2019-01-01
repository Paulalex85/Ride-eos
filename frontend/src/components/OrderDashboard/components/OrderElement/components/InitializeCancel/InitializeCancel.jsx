import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService } from 'services';

class InitializeCancel extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { order: { orderKey }, setOrder, user: { account }, orders: { listOrders } } = this.props;

        ApiService.initCancel(orderKey, account).then(() => {
            ApiService.getOrder(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        let isPrint = false;

        const { order: { state, currentActor } } = this.props;

        if (state === "1" && currentActor !== "") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <Button
                        onClick={this.handleClick}
                        className="green"
                        variant='contained'
                        color='primary'
                    >
                        INITIALIZATION CANCEL
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
export default connect(mapStateToProps, mapDispatchToProps)(InitializeCancel);
