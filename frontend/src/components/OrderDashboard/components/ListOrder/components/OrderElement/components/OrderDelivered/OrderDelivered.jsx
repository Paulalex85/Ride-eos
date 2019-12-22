import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, InputGroup, FormControl } from 'react-bootstrap'

import { OrderAction, UserAction } from 'actions';
import { ApiServiceReader, ApiServiceSender } from 'services';
import ReadQRCode from '../ReadQRCode';
import {UALContext} from "ual-reactjs-renderer";

class OrderDelivered extends Component {
    static contextType = UALContext;
    constructor(props) {
        super(props);

        this.state = {
            key: ""
        }
    }

    handleChange = event => {
        const { value } = event.target;

        this.setState({
            key: value,
        });
    };

    handleReadQRCode = key => {
        this.setState({
            key: key
        })
    };

    handleClick = async event => {
        event.preventDefault();

        const { key } = this.state;

        const { setOrder, setBalance, order: { orderKey }, orders: { listOrders }} = this.props;
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();

        ApiServiceSender.orderDelivered(orderKey, key, activeUser).then(() => {
            ApiServiceReader.getOrderByKey(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account: name });
                ApiServiceReader.getBalanceAccountEOS(name).then((balance) => {
                    setBalance({ balance: balance });
                })
            })
        }).catch((err) => { console.error(err) });
    };

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
                    <div>
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
                        <ReadQRCode dataQRCode={this.handleReadQRCode} />
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDelivered);
