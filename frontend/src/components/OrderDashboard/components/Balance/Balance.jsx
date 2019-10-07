import React, { Component } from "react";
import { connect } from 'react-redux';

import { Col, Row } from 'react-bootstrap'

class Balance extends Component {

    render() {

        const { user: { balance } } = this.props;
        return (
            <Row className="justify-content-md-center mt-4 mb-5">
                <Col className="col-md-auto">
                    <h5>Balance : {balance}</h5>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Balance);