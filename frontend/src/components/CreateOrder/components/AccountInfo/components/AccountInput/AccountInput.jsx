import React, { Component } from 'react';
// Components
import { Form, Col, Row } from 'react-bootstrap';

class AccountInput extends Component {
    handleChange = (event) => {
        const { value, validity } = event.target;

        if (validity.valid) {
            this.props.handleChange(value);
        }
    }

    render() {

        return (
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                    {this.props.label}
                </Form.Label>
                <Col sm={8}>
                    <Form.Control
                        disabled={this.props.disabled}
                        pattern="^[a-z0-5.]{0,12}$"
                        type="text"
                        value={this.props.account}
                        onChange={this.handleChange} />
                </Col>
            </Form.Group>

        )
    }
}

export default AccountInput;
