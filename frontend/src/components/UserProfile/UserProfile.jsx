import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { UpdateProfile, DepositToken, WithdrawToken, StackPower, UnlockStack } from './components'
import { Col, Form, Row } from 'react-bootstrap';


class UserProfile extends Component {

  render() {
    const { user: { account, balance } } = this.props;

    return (

      <Form>
        <Form.Group as={Row} className="justify-content-center" controlId="userAccount">
          <Form.Label column md={2}>Account</Form.Label>
          <Col md={2}>
            <Form.Label>{account}</Form.Label>
          </Col>
          <Col md={4}></Col>
        </Form.Group>

        <Form.Group as={Row} className="justify-content-center" controlId="userBalance">
          <Form.Label column md={2}>Balance</Form.Label>
          <Col md={2}>
            <Form.Label>{balance}</Form.Label>
          </Col>
          <Col md={4}></Col>
        </Form.Group>

        <UpdateProfile />
        <DepositToken />
        <WithdrawToken />

        <StackPower />
        <UnlockStack />
      </Form >
    )
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(UserProfile);