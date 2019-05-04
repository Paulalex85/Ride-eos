import React, { Component } from 'react';
// Components
import { Row, Col } from 'react-bootstrap';

import { SellerInfo, BuyerInfo, DeliverInfo } from './components'

class CreateOrder extends Component {
    constructor(props) {
        super(props);

        this.MAX_VALUE_PAGE = 3;

        this.state = {
            page: 1,
            buyer: "",
            seller: "",
            deliver: ""
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
                pageToPrint = <BuyerInfo
                    changePage={this.changePage}
                    buyer={this.state.buyer}
                    handleChange={this.handleChange}
                />
                break;
            case 2:
                pageToPrint = <SellerInfo
                    changePage={this.changePage}
                    seller={this.state.seller}
                />
                break;
            case 3:
                pageToPrint = <DeliverInfo
                    changePage={this.changePage}
                    deliver={this.state.deliver}
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