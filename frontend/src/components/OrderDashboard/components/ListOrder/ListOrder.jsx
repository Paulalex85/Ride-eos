import React, {Component} from 'react';
import {connect} from 'react-redux';
// Components
import {ListGroup} from 'react-bootstrap';
import {OrderAction} from 'actions'

import {OrderElement} from './components'
import {UALContext} from "ual-reactjs-renderer";
import {getOrdersOfUser} from "../../../../utils/OrderTools"

class ListOrder extends Component {
    static contextType = UALContext;

    componentDidMount = async () => {
        const {activeUser} = this.context;
        const {setListOrders} = this.props;
        const name = await activeUser.getAccountName();
        await getOrdersOfUser(name, setListOrders);
    };

    render() {
        const {orders: {listOrders}} = this.props;

        const Orders = listOrders.map(order => (
            <OrderElement
                order={order}
                key={order.orderKey}
            />
        ));

        return (
            <ListGroup className="align-items-center">
                {Orders}
            </ListGroup>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListOrders: OrderAction.setListOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);