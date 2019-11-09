import React, {Component} from 'react';
import {connect} from 'react-redux';
// Components
import {ListGroup} from 'react-bootstrap';

import {ApiService} from 'services'
import {OrderAction} from 'actions'

import {OrderElement} from './components'
import {UALContext} from "ual-reactjs-renderer";

class ListOrder extends Component {
    static contextType = UALContext;

    async componentDidMount() {
        const {activeUser} = this.context;
        const {setListOrders} = this.props;
        const name = await activeUser.getAccountName();
        return ApiService.getOrderByBuyer(name).then(listBuyer => {
            ApiService.getOrderBySeller(name).then(listSeller => {
                ApiService.getOrderByDeliver(name).then(listDeliver => {
                    let rows = listBuyer.rows.concat(listSeller.rows);
                    rows = rows.concat(listDeliver.rows);
                    let list = {
                        rows: rows
                    };
                    setListOrders({listOrders: list, account: name});
                })
            })
        }).catch((err) => {
            console.error(err)
        });
    }

    render() {
        const {orders: {listOrders}} = this.props;

        const Orders = listOrders.map(order => (
            <OrderElement
                order={order}
                key={order.orderKey}
            />
        ))

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