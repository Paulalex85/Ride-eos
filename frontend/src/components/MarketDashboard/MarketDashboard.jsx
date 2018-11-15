import React, { Component } from 'react';
import PlaceList from './components/PlaceList';

class MarketDashboard extends Component {


    render() {

        return (
            <div className="MarketDashboard">
                <PlaceList />
            </div>
        )
    }
}


// Export a redux connected component
export default (MarketDashboard);