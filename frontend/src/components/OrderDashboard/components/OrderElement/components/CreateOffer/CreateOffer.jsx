import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OrderAction, OfferAction } from 'actions';
import { ApiService } from 'services';

class CreateOffer extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { history, order: { orderKey } } = this.props;

        ApiService.addOffer(orderKey).then(() => {
            history.push("/offers");
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { order: { orderKey, state, currentActor }, offers: { listOffers } } = this.props;

        let printButton = false;

        if (state === "0" && currentActor === "buyer") {
            let founded = false;
            for (let i = 0; i < listOffers.length; i++) {
                const element = listOffers[i];
                if (element.orderKey === orderKey) {
                    founded = true;
                    break;
                }
            }
            if (founded === false) {
                printButton = true;
            }
        }

        return (
            <div>
                {printButton &&
                    <Button
                        className="green"
                        variant='contained'
                        color='primary'
                        onClick={this.handleClick}
                    >
                        CREATE OFFER
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
    setListOrders: OrderAction.setListOrders,
    setListOffers: OfferAction.setListOffers,
};

// Export a redux connected component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateOffer));
