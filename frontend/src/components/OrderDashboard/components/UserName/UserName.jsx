import React, { Component } from "react";
import { connect } from 'react-redux';

import { Col, Row } from 'react-bootstrap'

class UserName extends Component {

    render() {

        const { user: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');
        return (
            <Row className="justify-content-md-center mt-4">
                <Col className="col-md-auto">
                    <h5>EOS Username : {accountScatter.name}</h5>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserName);