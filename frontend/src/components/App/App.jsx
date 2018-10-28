// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { FormManager, Login } from 'components';

class App extends Component {

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

// Export a redux connected component
export default connect(mapStateToProps)(App);