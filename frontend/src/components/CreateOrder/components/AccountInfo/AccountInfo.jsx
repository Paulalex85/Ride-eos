import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';

import { AccountInput } from '..'

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

        let returnPage = "";
        if (!this.props.firstPage) {
            returnPage = <div onClick={() => this.props.changePage(-1)}>
                <Octicon
                    className="float-left"
                    size='medium'
                    icon={getIconByName("arrow-left")} />
            </div>
        }

        let labelCheckBox = "I'm the " + this.props.actor

        return (
            <Card className="text-center" >
                <Card.Header>
                    {returnPage}
                    {this.props.titleHeader}
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
                                label={labelCheckBox}
                            />
                        </Col>
                    </Form.Group>
                    <Button variant='primary'
                        className="float-right"
                        onClick={() => this.props.changePage(1)}>
                        Next
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(AccountInfo);