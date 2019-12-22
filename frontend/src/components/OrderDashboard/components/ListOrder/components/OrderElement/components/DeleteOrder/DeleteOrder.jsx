import React, {Component} from 'react';
import {connect} from 'react-redux';
// Components
import {Button} from 'react-bootstrap'
// Services and redux action
import {OrderAction} from '../../../../../../../../actions';
import {UALContext} from "ual-reactjs-renderer";
import {getOrdersOfUser} from "../../../../../../../../utils/OrderTools"
import {ApiServiceSender} from "../../../../../../../../services";

class DeleteOrder extends Component {
    static contextType = UALContext;

    handleClick = async event => {
        event.preventDefault();

        const {order: {orderKey}, setListOrders} = this.props;
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();

        ApiServiceSender.deleteOrder(orderKey, activeUser).then(() => {
            getOrdersOfUser(name, setListOrders);
        }).catch((err) => {
            console.error(err)
        });
    };

    render() {

        let isPrint = false;

        const {order: {state}} = this.props;

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
