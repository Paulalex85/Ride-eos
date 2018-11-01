import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Button from '@material-ui/core/Button';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';

class UserProfile extends Component {

  constructor(props) {
    // Inherit constructor
    super(props);

    this.state = {
      update: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.update) {
      this.setState({ update: false });
    } else {
      this.setState({ update: true });
    }
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
        <div className="welcome">
          <span>Welcome</span>
        </div>
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
      </div>
    )
  }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(UserProfile);