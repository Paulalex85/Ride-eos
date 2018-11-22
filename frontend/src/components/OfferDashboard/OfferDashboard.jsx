import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { OfferElement } from './components';
import { OfferAction } from 'actions';
import { ApiService } from 'services';

class OfferDashboard extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadOffers();
    }

    loadOffers() {
        const { setListOffers } = this.props;

        return ApiService.getOffers().then(list => {
            setListOffers({ listOffers: list });
        }).catch(() => { });
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
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(OfferDashboard);