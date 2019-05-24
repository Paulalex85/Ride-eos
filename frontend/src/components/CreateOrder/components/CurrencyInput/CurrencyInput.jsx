import React, { Component } from 'react';
// Components
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

class CurrencyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.amount
        }
    }

    handleChange = (event) => {
        const { value, validity } = event.target;

        if (validity.valid) {
            this.setState({
                quantity: value.replace(',', '.'),
            });

            let amount = value.replace(',', '.');

            if (!amount.includes(".")) {
                amount += ".0000 SYS";
            } else {
                let arrayAmount = amount.split('.');
                amount = arrayAmount[0] + ".";
                if (arrayAmount.length > 1) {
                    let digit = arrayAmount[1];
                    while (digit.length < 4) {
                        digit += 0;
                    }
                    amount += digit;
                } else {
                    amount += "0000"
                }
                amount += " SYS"
            }

            this.props.handleChange(amount, this.props.name);
        }
    }

    render() {

        return (
            <Form.Group as={Row}>
                <Col sm={3}>
                    <Form.Label >
                        {this.props.label}
                    </Form.Label>
                </Col>
                <Col sm={6}>
                    <InputGroup >
                        <Form.Control
                            pattern="^[0-9]*([,.][0-9]{0,4})?$"
                            type="text"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="symbol">SYS</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Form.Group>
        )
    }
}

export default CurrencyInput;
