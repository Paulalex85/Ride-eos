import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { OrderElement } from './components';
import { OrderAction } from 'actions';
import { ApiService } from 'services';

class OrderDashboard extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadOrders();
    }

    loadOrders() {
        const { setListOrders, scatter: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        return ApiService.getOrderByBuyer(accountScatter).then(list => {
            setListOrders({ listOrders: list, account: accountScatter });
        }).catch((err) => { console.error(err) });
    }

    render() {
        // Extract data and event functions from props
        const { orders: { listOrders } } = this.props;

        const Orders = listOrders.map(order => (
            <OrderElement
                order={order}
                key={order.orderKey}
            />
        ))

        return (
            <div className="OrderDashboard">
                <div className="title">Orders</div>
                {Orders}
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListOrders: OrderAction.setListOrders,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(OrderDashboard);