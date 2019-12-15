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

    setListOrdersToMap = (list, map) => {
        for (let entry of list.rows) {
            map.set(entry.orderKey.toString(), entry)
        }
        return map;
    };

    componentDidMount = async () => {
        const {activeUser} = this.context;
        const {setListOrders} = this.props;
        const name = await activeUser.getAccountName();
        let mapOrders = new Map();
        return ApiService.getOrderByBuyer(name).then(listBuyer => {
            mapOrders = this.setListOrdersToMap(listBuyer, mapOrders);
            ApiService.getOrderBySeller(name).then(listSeller => {
                mapOrders = this.setListOrdersToMap(listSeller, mapOrders);
                ApiService.getOrderByDeliver(name).then(listDeliver => {
                    mapOrders = this.setListOrdersToMap(listDeliver, mapOrders);
                    let list = {
                        rows: Array.from(mapOrders.values())
                    };
                    setListOrders({listOrders: list, account: name});
                })
            })
        }).catch((err) => {
            console.error(err)
        });
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