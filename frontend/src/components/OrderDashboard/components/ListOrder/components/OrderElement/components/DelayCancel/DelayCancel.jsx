import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Button } from 'react-bootstrap'
// Services and redux action
import { OrderAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class DelayCancel extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { order: { orderKey }, setOrder, setBalance, orders: { listOrders }, user: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        ApiServiceScatter.delayCancel(orderKey, scatter).then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: accountScatter.name });
                ApiService.getBalanceAccountEOS(accountScatter.name).then((balance) => {
                    setBalance({ balance: balance });
                })
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        let isPrint = false;

        const { order: { state, date } } = this.props;

        if (state === "2" || state === "3" || state === "4") {
            if (new Date(date).getTime() < Date.now()) {
                isPrint = true;
            }
        }

        return (
            <div>
                {isPrint &&
                    <Button
                        onClick={this.handleClick}
                        variant="danger"
                        className="float-right"
                    >
                        DELAY CANCEL
                </Button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
    setBalance: UserAction.setBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(DelayCancel);
