import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Col, Form, Row, Button } from 'react-bootstrap';

import { StackpowerAction, UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class UnlockStack extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.state = {
            form: {
                unlock: "0.0000 SYS"
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const { form: { unlock } } = this.state;
        const { setListStackpower, scatter: { scatter }, user: { account }, stackpower: { stackKeyCurrent } } = this.props;

        if (stackKeyCurrent !== undefined) {
            return ApiServiceScatter.unlockpow(unlock, stackKeyCurrent, scatter).then(() => {
                ApiService.getStackByAccount(account, scatter).then(stack => {
                    setListStackpower({ listStackpower: stack, account: account });
                }).catch((err) => { console.error(err) });
            }).catch((err) => { console.error(err) });
        }
    }

    render() {
        const { form } = this.state;

        return (

            <Form>
                <Form.Group as={Row} className="justify-content-center" controlId="userStackUnlock">
                    <Form.Label column md={2}>Unlock Stackpower</Form.Label>
                    <Col md={2}>
                        <Form.Control
                            type="text"
                            name="unlock"
                            value={form.unlock}
                            onChange={this.handleChange}
                        />

                    </Col>
                    <Col md={4}>
                        <Button
                            onClick={this.handleSubmit}
                            variant='primary'>
                            UNLOCK
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

export default connect(mapStateToProps, mapDispatchToProps)(UnlockStack);