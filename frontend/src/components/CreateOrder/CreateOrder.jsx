import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
// Components
import {Button, Card, Col, Row} from 'react-bootstrap';

import {ApiServiceScatter} from 'services';

import {AccountInfo, CurrencyInput, OrderDetails} from './components'
import DelayInput from './components/DelayInput/DelayInput';
import {UALContext} from "ual-reactjs-renderer";

class CreateOrder extends Component {
    static contextType = UALContext;

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            buyer: "",
            seller: "",
            deliver: "",
            details: "",
            amountSeller: "0.0000",
            amountDeliver: "0.0000",
            delay: new Date()
        }
    }

    async componentDidMount() {
        const {activeUser} = this.context;
        const name = await activeUser.getAccountName();
        this.setState({
            ...this.state,
            name: name
        })
    }

    handleChange = (value, name) => {
        this.setState({
            ...this.state,
            [name]: value
        })
    };

    handleSubmit = () => {
        const {activeUser} = this.context;
        const {history} = this.props;

        ApiServiceScatter.initializeOrder({
            sender: this.state.name,
            buyer: this.state.buyer,
            seller: this.state.seller,
            deliver: this.state.deliver,
            details: this.state.details,
            priceOrder: this.state.amountSeller,
            priceDeliver: this.state.amountDeliver,
            delay: Math.floor(this.state.delay.getTime() / 1000)
        }, activeUser).then(() => {
            history.push("/orders");
        });
    };

    render() {

        return (
            <Row className="justify-content-md-center mt-5">
                <Col className="col-sm-5">
                    <Card className="text-center">
                        <Card.Header>
                            Create Order
                        </Card.Header>
                        <Card.Body>
                            <AccountInfo
                                account={this.state.buyer}
                                actor={"buyer"}
                                handleChange={this.handleChange}
                                label={"Buyer"}
                            />
                            <AccountInfo
                                account={this.state.seller}
                                actor={"seller"}
                                handleChange={this.handleChange}
                                label={"Seller"}
                            />
                            <AccountInfo
                                account={this.state.deliver}
                                actor={"deliver"}
                                handleChange={this.handleChange}
                                label={"Deliver"}
                            />
                            <OrderDetails
                                handleChange={this.handleChange}
                                details={this.state.details}
                            />
                            <CurrencyInput
                                handleChange={this.handleChange}
                                amount={this.state.amountSeller}
                                name={"amountSeller"}
                                label={"Seller price"}
                            />
                            <CurrencyInput
                                handleChange={this.handleChange}
                                amount={this.state.amountDeliver}
                                name={"amountDeliver"}
                                label={"Deliver price"}
                            />
                            <DelayInput
                                handleChange={this.handleChange}
                                name={"delay"}
                                delay={this.state.delay}
                            />

                            <Button
                                variant="primary"
                                type="submit"
                                onClick={this.handleSubmit}
                                className="float-right">
                                Submit
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

// Export a redux connected component
export default withRouter(connect(mapStateToProps)(CreateOrder));