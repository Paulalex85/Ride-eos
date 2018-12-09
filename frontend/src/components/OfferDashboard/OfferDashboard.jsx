import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { OfferElement } from './components';
import { OfferAction, ApplyAction } from 'actions';
import { ApiService } from 'services';

class OfferDashboard extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadOffers();
    }

    loadOffers() {
        const { setListOffers, setListApplies } = this.props;

        ApiService.getOffers().then(offers => {
            setListOffers({ listOffers: offers })
        }).catch((err) => { console.error(err) });

        return ApiService.getApplies().then(applies => {
            const { offers: { listOffers } } = this.props;
            setListApplies({ listOffers: listOffers, listApplies: applies });
        }).catch((err) => { console.error(err) });
    }

    render() {
        // Extract data and event functions from props
        const { offers: { listOffers } } = this.props;

        const Offers = listOffers.map(offer => (
            <OfferElement
                offer={offer}
                key={offer.offerKey}
            />
        ))

        return (
            <div className="OfferDashboard">
                <div className="title">Offers</div>
                {Offers}
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListOffers: OfferAction.setListOffers,
    setListApplies: ApplyAction.setListApplies,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(OfferDashboard);