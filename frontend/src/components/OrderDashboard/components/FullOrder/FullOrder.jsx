import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

// Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// Services and redux action
import { ApiServiceScatter } from 'services';


class FullOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                buyer: "",
                seller: "",
                deliver: "",
                priceOrder: "",
                priceDeliver: "",
                details: "",
                delay: "",
                placeKey: "",
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { form } = this.state;
        const { history, scatter: { scatter } } = this.props;

        ApiServiceScatter.initializeOrder(form, scatter).then(() => {
            history.push("/orders");
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { form } = this.state;


        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <FormControl >
                    <TextField
                        name="buyer"
                        value={form.buyer}
                        label="Buyer"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="seller"
                        value={form.seller}
                        label="Seller"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="deliver"
                        value={form.deliver}
                        label="Deliver"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="priceOrder"
                        value={form.priceOrder}
                        label="Price Order"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="priceDeliver"
                        value={form.priceDeliver}
                        label="Price Deliver"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="details"
                        value={form.details}
                        label="Details"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="delay"
                        value={form.delay}
                        label="Delay"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="placeKey"
                        value={form.placeKey}
                        label="Place Key"
                        onChange={this.handleChange}
                    />
                    <Button
                        type="submit"
                        className="green"
                        variant='contained'
                        color='primary'>
                        CREATE
                        </Button>
                </FormControl>
            </form>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(FullOrder));
