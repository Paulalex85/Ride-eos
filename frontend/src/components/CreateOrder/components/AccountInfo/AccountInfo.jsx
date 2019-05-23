import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Form, Col, Row } from 'react-bootstrap';

import { AccountInput } from './components'

class AccountInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: this.props.account,
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
            this.props.handleChange(accountScatter.name, this.props.actor)
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

        this.props.handleChange(value, this.props.actor)
    }

    render() {
        let labelCheckBox = "I'm the " + this.props.actor

        return (
            <Row>
                <Col>
                    <AccountInput
                        handleChange={this.handleChange}
                        label={this.props.label}
                        disabled={this.state.disabled}
                        account={this.state.account}
                    />
                </Col>
                <Col sm={7}>
                    <Form.Check
                        onChange={this.handleCheckBox}
                        label={labelCheckBox}
                    />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(AccountInfo);