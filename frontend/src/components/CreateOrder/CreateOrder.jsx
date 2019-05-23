import React, { Component } from 'react';
// Components
import { Row, Col, Card, Button } from 'react-bootstrap';

import { AccountInfo, OrderDetails } from './components'

class CreateOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            buyer: "",
            seller: "",
            deliver: "",
            details: ""
        }
    }

    handleChange = (value, name) => {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {

        return (
            <Row className="justify-content-md-center mt-5">
                <Col className="col-sm-5">
                    <Card className="text-center" >
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
                                details={this.state.details} />
                            <Button
                                variant="primary"
                                type="submit"
                                className="float-right">
                                Submit
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        )
    }
}

// Export a redux connected component
export default CreateOrder;