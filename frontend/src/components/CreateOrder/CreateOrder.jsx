import React, { Component } from 'react';
// Components
import { Row, Col } from 'react-bootstrap';

import { IsBuyer, BuyerInfo } from './components'

class CreateOrder extends Component {

    MAX_VALUE_PAGE = 2;
    constructor(props) {
        super(props);

        this.state = {
            page: "IS_BUYER"
        }
    }

    changePage = (updatePage) => {
        let nextValue = this.state.page + updatePage
        if (nextValue >= 1 && nextValue <= MAX_VALUE_PAGE) {
            this.setState({ page: nextValue });
        }
    }

    render() {
        let pageToPrint = <div></div>;
        switch (this.state.page) {
            case 1:
                pageToPrint = <IsBuyer
                    changePage={this.changePage(value)}
                />
                break;

            case 2:
                pageToPrint = <BuyerInfo
                    changePage={this.changePage(value)}
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