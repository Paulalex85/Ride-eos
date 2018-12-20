import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Button from '@material-ui/core/Button';
import { UpdateProfile, DepositToken, WithdrawToken } from './components'

import { UserAction } from 'actions';
import { ApiService } from 'services';

class UserProfile extends Component {

  constructor(props) {
    // Inherit constructor
    super(props);

    this.state = {
      update: false
    }

    this.handleClick = this.handleClick.bind(this);

    this.getUser();
  }

  handleClick(event) {
    if (this.state.update) {
      this.setState({ update: false });
    } else {
      this.setState({ update: true });
    }
  }

  getUser() {
    const { setUser } = this.props;

    ApiService.getCurrentUser().then(user => {
      setUser({ account: user.account, username: user.username, balance: user.balance });
    }).catch((err) => { console.error(err) });
  }

  render() {
    // Extract data and event functions from props
    const { user: { account, username, balance } } = this.props;

    // Display welcome message,
    //         buttons for login,
    //         username and balance
    return (
      <div className="UserProfile">
        <div className="title">Rideos</div>
        <div className="account">
          <span>{account}</span>
        </div>
        <div className="username">
          <span>{username}</span>
        </div>
        <div className="balance">
          <span>{balance}</span>
        </div>
        <Button
          onClick={this.handleClick}
          className="green"
          variant='contained'
          color='primary'>
          Modifier
        </Button>
        {this.state.update && <UpdateProfile />}
        <DepositToken />
        <WithdrawToken />
      </div>
    )
  }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);