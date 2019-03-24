import React, { Component } from 'react';
// Components
import { Form, InputGroup } from 'react-bootstrap';

class CurrencyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                quantity: "0.0000"
            },
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, validity } = event.target;
        const { form } = this.state;

        if (validity.valid) {
            this.setState({
                form: {
                    ...form,
                    [name]: value.replace(',', '.'),
                },
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

            this.props.handleChange(amount);
        }
    }

    render() {
        const { form } = this.state;

        return (
            <InputGroup >
                <Form.Control
                    pattern="^[0-9]*([,.][0-9]{0,4})?$"
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={this.handleChange}
                />
                <InputGroup.Append>
                    <InputGroup.Text id="symbol">SYS</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default CurrencyInput;
