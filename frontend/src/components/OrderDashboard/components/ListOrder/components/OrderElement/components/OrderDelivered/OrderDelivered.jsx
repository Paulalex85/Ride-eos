import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, InputGroup, FormControl } from 'react-bootstrap'

import { OrderAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class OrderDelivered extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;

        this.setState({
            key: value,
        });
    }

    handleClick(event) {
        event.preventDefault();

        const { key } = this.state;

        const { setOrder, order: { orderKey }, orders: { listOrders }, scatter: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        ApiServiceScatter.orderDelivered(orderKey, key, scatter).then(() => {
            ApiService.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: accountScatter });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        const { order } = this.props;
        const { key } = this.state;

        let isPrint = false;

        if (order.state === "4" && order.currentActor === "deliver") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Key</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="key"
                            value={key}
                            label="Key"
                            onChange={this.handleChange}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                        <InputGroup.Append>
                            <Button
                                onClick={this.handleClick}
                                variant='primary'
                            >
                                ORDER DELIVERED
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDelivered);
