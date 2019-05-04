import React, { Component } from 'react';
// Components
import { Form } from 'react-bootstrap';

class AccountInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        const { value, validity } = event.target;

        if (validity.valid) {
            this.setState({
                name: value
            });

            this.props.handleChange(value);
        }
    }

    render() {
        const { name } = this.state;

        return (
            <Form.Control
                pattern="^[a-z0-5.]{0,12}$"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
            />
        )
    }
}

export default AccountInput;
