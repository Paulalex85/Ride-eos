import React, { Component } from 'react';
// Components
import { ListOrder, NewOrder } from './components';

class OrderDashboard extends Component {

    render() {

        return (
            <div>
                <NewOrder />
                <ListOrder />
            </div>
        )
    }
}


// Export a redux connected component
export default OrderDashboard;