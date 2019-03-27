import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { UpdateProfile, DepositToken, WithdrawToken, StackPower, UnlockStack, ListUnlocked, DeleteUser } from './components'
import { Card, CardColumns } from 'react-bootstrap';

import { ApiService } from 'services';


class UserProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      balanceEOS: "0.0000 SYS"
    }

    this.getAccountEOS();
  }

  getAccountEOS = () => {
    const { user: { account } } = this.props;
    console.log("get balance eos ...")
    ApiService.getBalanceAccountEOS(account).then(value => {
      this.setState({
        balanceEOS: value
      })
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    const { user: { account, balance }, stackpower: { listStackpower, stackKeyCurrent } } = this.props;
    const { balanceEOS } = this.state;
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
                {balanceEOS}
              </Card.Text>
              <Card.Title>Rideos Username</Card.Title>

              <UpdateProfile />
              <DeleteUser />
            </Card.Body>
          </Card>

          <Card >
            <Card.Header>Token Management</Card.Header>
            <Card.Body>
              <Card.Title>Rideos balance</Card.Title>
              <Card.Text>
                {balance}
              </Card.Text>
              <DepositToken update={this.getAccountEOS} />
              <WithdrawToken update={this.getAccountEOS} />
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