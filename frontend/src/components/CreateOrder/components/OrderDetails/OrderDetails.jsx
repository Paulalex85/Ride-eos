import React, { Component } from 'react';
// Components
import { Form, Row, Col } from 'react-bootstrap';


class OrderDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            details: this.props.details
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            details: value
        })

        this.props.handleChange(value, "details")
    }

    render() {

        return (
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Details of the order
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" onChange={this.handleChange} value={this.state.details} />
                </Col>
            </Form.Group>
        )
    }
}


// Export a redux connected component
export default OrderDetails;