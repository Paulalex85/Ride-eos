import React, { Component } from 'react';
// Components
import { Card, Row, Col } from 'react-bootstrap';

class CreateOrder extends Component {

    render() {

        return (
            <Row className="justify-content-md-center mt-5">
                <Col className="col-sm-3">
                    <Card >
                        <Card.Body>
                            <Card.Text>
                                Order
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        )
    }
}


// Export a redux connected component
export default CreateOrder;