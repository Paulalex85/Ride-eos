import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Row, Container } from 'react-bootstrap'


class NewOrder extends Component {

    render() {
        return (
            <Container className="mt-4 mb-5">
                <Row className="justify-content-md-center">
                    <Col className="col-md-auto">
                        <h5>New order ?</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col className="col-md-auto">
                        <LinkContainer to="/create">
                            <Button
                                variant='primary'>
                                Create order
                        </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewOrder;