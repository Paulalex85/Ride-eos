import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Col, Form, Row } from 'react-bootstrap';

import { StackpowerAction } from 'actions';
import { ApiService } from 'services';

class StackPower extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.getStackpower();
    }

    getStackpower() {
        const { setListStackpower, user: { account }, scatter: { scatter } } = this.props;

        console.log(account)

        ApiService.getStackByAccount(account, scatter).then(stack => {
            setListStackpower({ listStackpower: stack, account: account });
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { stackpower: { listStackpower } } = this.props;

        let stack = undefined;
        for (let i = 0; i < listStackpower.length; i++) {
            const element = listStackpower[i];
            console.log(element)
            console.log(new Date(element.endAssignment).getTime())
            if (new Date(element.endAssignment).getTime() === 0) {
                stack = element;
                break;
            }
        }

        return (

            <Form>
                {stack !== undefined &&
                    <Form.Group as={Row} className="justify-content-center" controlId="userStack">
                        <Form.Label column md={2}>Stackpower balance</Form.Label>
                        <Col md={2}>
                            <Form.Label>{stack.balance}</Form.Label>
                        </Col>
                        <Col md={4}></Col>
                    </Form.Group>
                }
            </Form >

        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListStackpower: StackpowerAction.setListStackpower,
};

export default connect(mapStateToProps, mapDispatchToProps)(StackPower);