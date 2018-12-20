import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { ApplyElement, ApplyOffer, CancelOffer } from './components';

class OfferElement extends Component {

    render() {
        const { offer, offer: { listApplies } } = this.props;

        const Applies = listApplies.map(apply => (
            <ApplyElement
                apply={apply}
                offer={offer}
                key={apply.applyKey}
            />

        ))

        return (
            <Card>
                <CardContent>
                    <Typography>Offer key : {offer.offerKey}</Typography>
                    <Typography>Order key : {offer.orderKey}</Typography>
                    <Typography>State : {offer.stateOffer}</Typography>
                    <ApplyOffer offer={offer} />
                    <CancelOffer offer={offer} />
                </CardContent>
                {Applies}
            </Card>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(OfferElement);
