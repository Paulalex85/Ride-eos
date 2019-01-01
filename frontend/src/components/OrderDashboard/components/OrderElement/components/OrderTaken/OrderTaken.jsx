import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Services and redux action
import { OrderAction } from 'actions';
import { ApiService } from 'services';

class OrderTaken extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.state = {
            key: ""
        }

        // Bind functions
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

        const { setOrder, order: { orderKey }, orders: { listOrders }, user: { account } } = this.props;

        ApiService.orderTaken(orderKey, key).then(() => {
            ApiService.getOrder(orderKey).then((order) => {
                setOrder({ listOrders: listOrders, order: order, account });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        const { order } = this.props;
        const { key } = this.state;

        let isPrint = false;

        if (order.state === "3" && order.currentActor === "deliver") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <div>
                        <TextField
                            name="key"
                            value={key}
                            label="Key"
                            onChange={this.handleChange}
                        />
                        <Button className="green"
                            variant='contained'
                            color='primary'
                            onClick={this.handleClick} >
                            ORDER TAKEN
                        </Button>
                    </div>
                }
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(OrderTaken);
