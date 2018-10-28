import React, { Component } from 'react';
// Components
import Button from '@material-ui/core/Button';

class UserProfile extends Component {

  render() {
    // Extract data and event functions from props
    const { account, username, balance} = this.props;

    // Display welcome message,
    //         buttons for login,
    //         username and balance
    return (
      <div className="UserProfile">
        <div className="title">Rideos</div>
        <div className="welcome">
          <span>Welcome</span>
        </div>
        <div className="account">
          <span>{ account }</span>
        </div>
        <div className="username">
          <span>{ username }</span>
        </div>
        <div className="balance">
          <span>{ balance }</span>
        </div>
        <Button 
            className="green"
            variant='contained'
            color='primary'>
            Modifier
        </Button>
      </div>
    )
  }
}

export default UserProfile;