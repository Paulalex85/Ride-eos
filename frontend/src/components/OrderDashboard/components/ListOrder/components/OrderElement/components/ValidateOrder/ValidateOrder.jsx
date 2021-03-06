import React, {Component} from 'react';
import {connect} from 'react-redux';
// Components
import {Button} from 'react-bootstrap'
// Services and redux action
import {OrderAction, UserAction} from 'actions';
import {ApiServiceReader, ApiServiceSender} from 'services';
import {UALContext} from "ual-reactjs-renderer";
import {createKeyOrder} from '../../../../../../../../utils/OrderTools'

class ValidateOrder extends Component {
    static contextType = UALContext;

    handleClick = async (event) => {
        event.preventDefault();

        const {order: {orderKey}, setOrder, orders: {listOrders}} = this.props;
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();

        this.validateAPI().then(() => {
            ApiServiceReader.getOrderByKey(orderKey).then((order) => {
                setOrder({listOrders: listOrders, order: order, account: name});
            })
        }).catch((err) => {
            console.error(err)
        });
    };

    validateAPI = async () => {
        const {order, order: {currentActor, orderKey}, setBalance} = this.props;
        const {activeUser} = this.context;

        if (currentActor === "deliver") {
            await ApiServiceSender.validateDeliver(orderKey, activeUser);
        } else if (currentActor === "seller") {
            let keyset = await createKeyOrder(activeUser, order);
            await ApiServiceSender.validateSeller(orderKey, keyset.hash, activeUser);
        } else if (currentActor === "buyer") {
            const name = await activeUser.getAccountName();
            let keyset = await createKeyOrder(activeUser, order);
            await ApiServiceSender.validateBuyer(orderKey, keyset.hash, activeUser);
            let balance = await ApiServiceReader.getBalanceAccountEOS(name);
            await setBalance({balance: balance});
        }
    };

    setCanValidate() {
        const {order} = this.props;

        if (order.state === "1") {
            if (order.currentActor === "seller") {
                return order.validateSeller === "0";
            } else if (order.currentActor === "deliver") {
                return order.validateDeliver === "0";
            } else if (order.currentActor === "buyer") {
                return order.validateBuyer === "0";
            }
        }
        return false
    }

    render() {

        let canValidate = this.setCanValidate();

        return (
            <div>
                {canValidate &&
                <Button
                    onClick={this.handleClick}
                    variant='primary'
                >
                    VALIDATE
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

export default connect(mapStateToProps, mapDispatchToProps)(ValidateOrder);