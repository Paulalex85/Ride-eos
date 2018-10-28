// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { FormManager, Login } from 'components';

import { UserAction } from 'actions';
import { ApiService } from 'services';

class App extends Component {

  constructor(props) {
    // Inherit constructor
    super(props);
    // Bind functions
    this.getCurrentUser = this.getCurrentUser.bind(this);
    // Call getCurrentUser before mounting the app
    this.getCurrentUser();
  }

  getCurrentUser() {
    // Extract setUser of UserAction from redux
    const { setUser } = this.props;
    // Send a request to API (blockchain) to get the current logged in user
    return ApiService.getCurrentUser()
      // If the server return an account
      .then(account => {
        setUser({ account: account });
      })
      // To ignore 401 console error
      .catch(() => {})
  }

  render() {
    // Extract data from state and props (`user` is from redux)
    const { user: { account } } = this.props;

    // If the account is set in redux, display the FormManager component
    // If the account is NOT set in redux, display the Login component
    return (
      <div className="App">
        { account && <FormManager /> }
        { !account && <Login /> }
      </div>
    );
  }

}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
  setUser: UserAction.setUser,
};

// Export a redux connected component
export default connect(mapStateToProps,mapDispatchToProps)(App);