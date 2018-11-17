import React, { Component } from 'react';
import { PlaceList, AssignmentUser } from './components';

class AssignPlace extends Component {


    render() {
        return (
            <div className="AssignPlace">
                <PlaceList />
                <AssignmentUser />
            </div>
        )
    }
}


// Export a redux connected component
export default (AssignPlace);