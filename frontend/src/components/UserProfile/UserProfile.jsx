import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { UpdateProfile, DepositToken, WithdrawToken, StackPower, UnlockStack, ListUnlocked } from './components'
import { Card, CardColumns } from 'react-bootstrap';

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

      <div className="justify-content-center">
        <CardColumns className="m-3">
          <Card >
            <Card.Header>Account</Card.Header>
            <Card.Body>

              <Card.Title>EOS Account</Card.Title>
              <Card.Text>
                {account}
              </Card.Text>
              <Card.Title>Balance EOS Account</Card.Title>
              <Card.Text>
                {this.balanceEOS}
              </Card.Text>
              <Card.Title>Rideos Username</Card.Title>

              <UpdateProfile />
            </Card.Body>
          </Card>

          <Card >
            <Card.Header>Token Management</Card.Header>
            <Card.Body>
              <Card.Title>Rideos balance</Card.Title>
              <Card.Text>
                {balance}
              </Card.Text>
              <DepositToken />
              <WithdrawToken />
            </Card.Body>
          </Card>

          <Card >
            <Card.Header>Stack Power</Card.Header>
            <Card.Body>
              <StackPower />
              <UnlockStack />

              {hasUnlocked &&
                <ListUnlocked />
              }
            </Card.Body>
          </Card>

        </CardColumns>
      </div>
    )
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(UserProfile);