import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { UpdateProfile, DepositToken, WithdrawToken, StackPower, UnlockStack, ListUnlocked } from './components'
import { Col, Form, Row } from 'react-bootstrap';

import { ApiService } from 'services';


class UserProfile extends Component {

  constructor(props) {
    super(props)

    this.balanceEOS = "0.0000 SYS"
    this.getAccountEOS();
  }

  getAccountEOS() {
    const { user: { account } } = this.props;
    console.log(account)
    ApiService.getBalanceAccountEOS(account).then(value => {
      this.balanceEOS = value;
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    const { user: { account, balance }, stackpower: { listStackpower, stackKeyCurrent } } = this.props;

    let hasUnlocked = false;

    for (let i = 0; i < listStackpower.length; i++) {
      const element = listStackpower[i];
      if (element.stackKey !== stackKeyCurrent) {
        hasUnlocked = true;
        break;
      }
    }

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
          <Form.Label column md={2}>Balance rideos</Form.Label>
          <Col md={2}>
            <Form.Label>{balance}</Form.Label>
          </Col>
          <Col md={4}></Col>
        </Form.Group>

        <Form.Group as={Row} className="justify-content-center" controlId="userBalance">
          <Form.Label column md={2}>Balance EOS</Form.Label>
          <Col md={2}>
            <Form.Label>{this.balanceEOS}</Form.Label>
          </Col>
          <Col md={4}></Col>
        </Form.Group>


        <UpdateProfile />
        <DepositToken />
        <WithdrawToken />

        <StackPower />
        <UnlockStack />

        {hasUnlocked &&
          <ListUnlocked />
        }
      </Form >
    )
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(UserProfile);