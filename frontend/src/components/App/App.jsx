// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Main, Login } from 'components';

import { UserAction } from 'actions';
import { ApiService } from 'services';

class App extends Component {

  constructor(props) {
    super(props);

    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.getCurrentUser();
  }

  getCurrentUser() {
    const { setUser, scatter: { scatter } } = this.props;

    if (scatter) {
      const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

      ApiService.getUserByAccount(account.name).then(user => {
        setUser({ account: user.account, username: user.username, balance: user.balance });
      }).catch((err) => { console.error(err) });
    }
  }

  render() {
    const { user: { account } } = this.props;

    return (
      <div className="App" >
        {account && <Main />}
        {!account && <Login />}
      </div>
    );
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);