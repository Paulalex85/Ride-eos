import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { ListGroup } from 'react-bootstrap';

import { ApiService } from 'services'
import { OrderAction } from 'actions'

import { OrderElement } from './components'

class ListOrder extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);
        this.loadOrders();
    }

    loadOrders() {
        const { setListOrders, scatter: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        return ApiService.getOrderByBuyer(accountScatter).then(listBuyer => {
            ApiService.getOrderBySeller(accountScatter).then(listSeller => {
                ApiService.getOrderByDeliver(accountScatter).then(listDeliver => {
                    let rows = listBuyer.rows.concat(listSeller.rows)
                    rows = rows.concat(listDeliver.rows)
                    let list = {
                        rows: rows
                    }
                    setListOrders({ listOrders: list, account: accountScatter.name });
                })
            })
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { orders: { listOrders } } = this.props;

        const Orders = listOrders.map(order => (
            <OrderElement
                order={order}
                key={order.orderKey}
            />
        ))

        return (
            <ListGroup className="align-items-center" >
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