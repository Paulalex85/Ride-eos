import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { OfferElement } from './components';
import { OfferAction, ApplyAction, OrderAction } from 'actions';
import { ApiService } from 'services';

class OfferDashboard extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadOffers();
    }

    setOrderOfOffers(listKey) {
        if (listKey.length > 0) {
            let key = listKey.shift();
            const { setOrder, orders: { listOrders }, user: { account } } = this.props;

            ApiService.getOrderByKey(key).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: account });
                this.setOrderOfOffers(listKey);
            }).catch((err) => { console.error(err) });
        }
    }

    getListOrderKeyToGet(listOffers, listOrders) {
        let listKey = [];

        for (let i = 0; i < listOffers.length; i++) {
            let founded = false;
            for (let j = 0; j < listOrders.length; j++) {
                if (listOffers[i].orderKey === listOrders[j].orderKey) {
                    founded = true;
                    break;
                }
            }
            if (founded === false) {
                listKey.push(listOffers[i].orderKey);
            }
        }
        return listKey;
    }

    loadOffers() {
        const { setListOffers, setListApplies } = this.props;

        return ApiService.getOffers().then(offers => {
            setListOffers({ listOffers: offers });
            ApiService.getApplies().then(applies => {
                const { offers: { listOffers }, orders: { listOrders } } = this.props;
                setListApplies({ listOffers: listOffers, listApplies: applies });

                let listKey = this.getListOrderKeyToGet(listOffers, listOrders);
                this.setOrderOfOffers(listKey);
            })
        }).catch((err) => { console.error(err) });
    }

    render() {
        // Extract data and event functions from props
        const { offers: { listOffers } } = this.props;

        const Offers = listOffers.map(offer => (
            <OfferElement
                offer={offer}
                key={offer.offerKey}
            />
        ))

        return (
            <div className="OfferDashboard">
                <div className="title">Offers</div>
                {Offers}
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListOffers: OfferAction.setListOffers,
    setListApplies: ApplyAction.setListApplies,
    setOrder: OrderAction.setOrder,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(OfferDashboard);