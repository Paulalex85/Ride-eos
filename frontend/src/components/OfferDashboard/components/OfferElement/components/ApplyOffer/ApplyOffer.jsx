import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { ApplyAction } from 'actions';
import { ApiService } from 'services';

class ApplyOffer extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { setListApplies, offer: { offerKey }, user: { account } } = this.props;

        ApiService.addApply(account, offerKey).then(() => {
            ApiService.getApplies().then(applies => {
                const { offers: { listOffers } } = this.props;
                setListApplies({ listOffers: listOffers, listApplies: applies });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        const { offer, offer: { listApplies }, user: { account }, orders: { listOrders } } = this.props;

        let alreadyApplied = false;
        let canApply = true;
        let printButton = false;

        for (let i = 0; i < listOrders.length; i++) {
            if (listOrders[i].orderKey === offer.orderKey && listOrders[i].currentActor === "buyer") {
                canApply = false;
                break;
            }
        }

        if (canApply === true) {
            for (let i = 0; i < listApplies.length; i++) {
                if (listApplies[i].deliver === account) {
                    alreadyApplied = true;
                    break;
                }
            }

            if (offer.stateOffer === "0" && alreadyApplied === false) {
                printButton = true;
            }
        }
        return (
            <div>
                {printButton &&
                    < Button
                        className="green"
                        variant='contained'
                        color='primary'
                        onClick={this.handleClick}
                    >
                        APPLY
                </Button>
                }
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListApplies: ApplyAction.setListApplies,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(ApplyOffer);
