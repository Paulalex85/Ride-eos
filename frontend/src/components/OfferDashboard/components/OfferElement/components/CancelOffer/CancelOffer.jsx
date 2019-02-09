import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OfferAction } from 'actions';
import { ApiService } from 'services';

class CancelOffer extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { offer: { offerKey }, setOffer, offers: { listOffers }, scatter: { scatter } } = this.props;

        return ApiService.cancelOffer(offerKey, scatter).then(() => {
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
                {printButton &&
                    < Button
                        className="green"
                        variant='contained'
                        color='primary'
                        onClick={this.handleClick}
                    >
                        CANCEL OFFER
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
export default connect(mapStateToProps, mapDispatchToProps)(CancelOffer);
