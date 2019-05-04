import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Card, Button, Form, Col, Row } from 'react-bootstrap';

import { AccountInput } from '../'

class BuyerInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: this.props.buyer,
            disabled: false
        }
    }

    handleCheckBox = (event) => {
        if (event.target.checked === true) {
            const { scatter: { scatter } } = this.props;
            const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');
            this.setState({
                account: accountScatter.name,
                disabled: true
            })
        }
        else {
            this.setState({
                ...this.state,
                disabled: false
            })
        }
    }

    handleChange = (value) => {
        this.setState({
            account: value
        })

        this.props.handleChange(value, "buyer")
    }

    render() {
        return (
            <Card className="text-center" >
                <Card.Header>
                    Buyer
                </Card.Header>
                <Card.Body>
                    <AccountInput
                        handleChange={this.handleChange}
                        label="Account"
                        disabled={this.state.disabled}
                        account={this.state.account}
                    />
                    <Form.Group as={Row} controlId="imselfCheck">
                        <Col sm={7}>
                            <Form.Check
                                onChange={this.handleCheckBox}
                                label="I'm the buyer"
                            />
                        </Col>
                    </Form.Group>
                    <Button variant='primary'
                        className="float-right"
                        onClick={() => this.props.changePage(1)}>
                        Next
                    </Button>
                </Card.Body>
            </Card >
        )
    }
}

const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(BuyerInfo);