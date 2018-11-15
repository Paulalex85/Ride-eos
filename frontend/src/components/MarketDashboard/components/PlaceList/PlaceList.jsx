import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PlaceAction } from 'actions';
import { ApiService } from 'services';

class MarketDashboard extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadPlaces();
    }

    loadPlaces() {
        const { setListPlaces } = this.props;

        // Send a request to API (blockchain) to get the current logged in user
        return ApiService.getPlaces()
            // If the server return an account
            .then(list => {
                setListPlaces({ listPlaces: list });
            })
            // To ignore 401 console error
            .catch(() => { })
    }

    render() {
        // Extract data and event functions from props
        const { places: { listPlaces } } = this.props;

        const Places = listPlaces.map(place => (
            <div>
                {place.zipCode}
            </div>
        ))

        return (
            <div className="MarketDashboard">
                <div className="title">Places</div>
                {Places}
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListPlaces: PlaceAction.setListPlaces,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(MarketDashboard);