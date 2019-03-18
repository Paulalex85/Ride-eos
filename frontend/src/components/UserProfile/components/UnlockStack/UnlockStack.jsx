import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Card, Form, Button } from 'react-bootstrap';

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
            <div className="mt-3">
                <Card.Title>Unlock Stackpower</Card.Title>
                <Form.Control
                    type="text"
                    name="unlock"
                    value={form.unlock}
                    onChange={this.handleChange}
                />
                <Button
                    className="mt-3"
                    onClick={this.handleSubmit}
                    variant='primary'>
                    UNLOCK
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setListStackpower: StackpowerAction.setListStackpower,
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnlockStack);