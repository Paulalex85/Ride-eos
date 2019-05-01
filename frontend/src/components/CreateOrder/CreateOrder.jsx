import React, { Component } from 'react';
// Components
import { Row, Col } from 'react-bootstrap';

import { IsBuyer, BuyerInfo } from './components'

class CreateOrder extends Component {
    constructor(props) {
        super(props);

        this.MAX_VALUE_PAGE = 2;

        this.state = {
            page: 1
        }
    }

    changePage = (updatePage) => {
        let nextValue = this.state.page + updatePage
        if (nextValue >= 1 && nextValue <= this.MAX_VALUE_PAGE) {
            this.setState({ page: nextValue });
        }
    }

    render() {
        let pageToPrint = <div></div>;
        switch (this.state.page) {
            case 1:
                pageToPrint = <IsBuyer
                    changePage={(updatePage) => this.changePage(updatePage)}
                />
                break;

            case 2:
                pageToPrint = <BuyerInfo
                    changePage={this.changePage}
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