import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { OfferAction } from 'actions';
import { ApiService } from 'services';

class ChooseDeliver extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { setOffer, offers: { listOffers }, offer: { offerKey }, apply: { deliver }, scatter: { scatter } } = this.props;

        ApiService.endOffer(deliver, offerKey, scatter).then(() => {
            ApiService.getOfferByKey(offerKey).then(offer => {
                setOffer({ listOffers: listOffers, offer: offer });
            });
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { offer, orders: { listOrders } } = this.props;

        let printButton = false;

        for (let i = 0; i < listOrders.length; i++) {
            if (listOrders[i].orderKey === offer.orderKey && listOrders[i].currentActor === "buyer" && offer.stateOffer === "0") {
                printButton = true;
                break;
            }
        }

        return (
            <div>
                {
                    printButton &&
                    <Button variant="contained" color="secondary" onClick={this.handleClick}>
                        CHOOSE
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
    setOffer: OfferAction.setOffer,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(ChooseDeliver);
