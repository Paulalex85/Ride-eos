import React, { Component } from 'react';
import PlaceList from './components/PlaceList';

class AssignPlace extends Component {


    render() {
        return (
            <div className="AssignPlace">
                <PlaceList />
            </div>
        )
    }
}


// Export a redux connected component
export default (AssignPlace);