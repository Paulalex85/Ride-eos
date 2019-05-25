import React, { Component } from 'react';
// Components
import { Form, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DelayInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delay: this.props.delay
        }
    }

    handleChange = (date) => {
        this.setState({
            delay: date
        })

        this.props.handleChange(date, this.props.name);
    }

    render() {

        return (
            <Form.Group as={Row}>
                <Col sm={3}>
                    <Form.Label >
                        Delay for delivery
                    </Form.Label>
                </Col>
                <Col sm={7}>
                    <DatePicker
                        selected={this.state.delay}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="d/M/yyyy HH:mm"
                        timeCaption="Time"
                        minDate={new Date()}
                    />
                </Col>
            </Form.Group>
        )
    }
}

export default DelayInput;
