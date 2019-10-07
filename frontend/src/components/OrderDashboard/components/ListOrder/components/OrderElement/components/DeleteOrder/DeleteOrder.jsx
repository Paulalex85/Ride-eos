import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Button } from 'react-bootstrap'
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class DeleteOrder extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { order: { orderKey }, setListOrders, user: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        ApiServiceScatter.deleteOrder(orderKey, scatter).then(() => {
            ApiService.getOrderByBuyer(accountScatter).then(list => {
                setListOrders({ listOrders: list, account: accountScatter.name });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        let isPrint = false;

        const { order: { state } } = this.props;

        if (state === "5" || state === "99" || state === "98") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <Button
                        onClick={this.handleClick}
                        variant="danger"
                        className="float-right"
                    >
                        DELETE ORDER
                    </Button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListOrders: OrderAction.setListOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteOrder);
