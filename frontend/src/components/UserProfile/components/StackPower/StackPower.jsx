import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Col, Form, Row, Button } from 'react-bootstrap';

import { StackpowerAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class StackPower extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.getStackpower();

        this.state = {
            form: {
                stack: "0.0000 SYS"
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getStackpower = this.getStackpower.bind(this);
    }

    getStackpower() {
        const { setListStackpower, user: { account }, scatter: { scatter } } = this.props;

        ApiService.getStackByAccount(account, scatter).then(stack => {
            setListStackpower({ listStackpower: stack, account: account });
        }).catch((err) => { console.error(err) });
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { form: { stack } } = this.state;
        const { setUser, scatter: { scatter }, user: { account } } = this.props;

        return ApiServiceScatter.stackpow(stack, scatter).then(() => {
            ApiService.getUserByAccount(account).then(user => {
                setUser({
                    account: user.account,
                    username: user.username,
                    balance: user.balance,
                });
            });
            this.getStackpower();
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { stackpower: { listStackpower } } = this.props;
        const { form } = this.state;

        let balance = "0.0000 SYS";
        for (let i = 0; i < listStackpower.length; i++) {
            const element = listStackpower[i];
            if (new Date(element.endAssignment).getTime() === 0) {
                balance = element.balance;
                break;
            }
        }

        return (

            <Form>

                <Form.Group as={Row} className="justify-content-center" controlId="userStack">
                    <Form.Label column md={2}>Stackpower balance</Form.Label>
                    <Col md={2}>
                        <Form.Label>{balance}</Form.Label>
                    </Col>
                    <Col md={4}></Col>
                </Form.Group>

                <Form.Group as={Row} className="justify-content-center" controlId="userStackAdd">
                    <Form.Label column md={2}>Add Stackpower</Form.Label>
                    <Col md={2}>
                        <Form.Control
                            type="text"
                            name="stack"
                            value={form.stack}
                            onChange={this.handleChange}
                        />

                    </Col>
                    <Col md={4}>
                        <Button
                            onClick={this.handleSubmit}
                            variant='primary'>
                            ADD
                        </Button>
                    </Col>
                </Form.Group>
            </Form >

        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListStackpower: StackpowerAction.setListStackpower,
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(StackPower);