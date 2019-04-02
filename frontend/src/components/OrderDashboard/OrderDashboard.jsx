import React, { Component } from 'react';
// Components
import { ListOrder } from './components';

class OrderDashboard extends Component {

    render() {

        return (
            <div>
                <ListOrder />
            </div>
        )
    }
}


// Export a redux connected component
export default OrderDashboard;