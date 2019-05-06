import React, { Component } from 'react';
// Components
import { Row, Col } from 'react-bootstrap';

import { AccountInfo, OrderDetails } from './components'

class CreateOrder extends Component {
    constructor(props) {
        super(props);

        this.MAX_VALUE_PAGE = 4;

        this.state = {
            page: 1,
            buyer: "",
            seller: "",
            deliver: "",
            details: ""
        }
    }

    changePage = (updatePage) => {
        let nextValue = this.state.page + updatePage
        if (nextValue >= 1 && nextValue <= this.MAX_VALUE_PAGE) {
            this.setState({ page: nextValue });
        }
    }

    handleChange = (value, name) => {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {
        let pageToPrint = <div></div>;
        switch (this.state.page) {
            case 1:
                pageToPrint = <AccountInfo
                    key={1}
                    firstPage={true}
                    changePage={this.changePage}
                    account={this.state.buyer}
                    handleChange={this.handleChange}
                    actor="buyer"
                    titleHeader="Buyer"
                />
                break;
            case 2:
                pageToPrint = <AccountInfo
                    key={2}
                    firstPage={false}
                    changePage={this.changePage}
                    account={this.state.seller}
                    handleChange={this.handleChange}
                    actor="seller"
                    titleHeader="Seller"
                />
                break;
            case 3:
                pageToPrint = <AccountInfo
                    key={3}
                    firstPage={false}
                    changePage={this.changePage}
                    account={this.state.deliver}
                    handleChange={this.handleChange}
                    actor="deliver"
                    titleHeader="Deliver"
                />
                break;
            case 4:
                pageToPrint = <OrderDetails
                    firstPage={false}
                    changePage={this.changePage}
                    handleChange={this.handleChange}
                    key={4}
                    titleHeader="Details"
                />
                break;

            default:
                break;
        }

        return (
            <Row className="justify-content-md-center mt-5">
                <Col className="col-sm-3">
                    {pageToPrint}
                </Col>
            </Row>
        )
    }
}

// Export a redux connected component
export default CreateOrder;