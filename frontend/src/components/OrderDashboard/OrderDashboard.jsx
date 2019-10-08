import React, { Component } from 'react';
// Components
import { ListOrder, NewOrder, Balance, UserName } from './components';

class OrderDashboard extends Component {

    render() {

        return (
            <div>
                <UserName />
                <Balance />
                <NewOrder />
                <ListOrder />
            </div>
        )
    }
}


// Export a redux connected component
export default OrderDashboard;