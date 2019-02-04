import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Services and redux action
import { UserAction } from 'actions';
import { ApiService } from 'services';

import Scatter from '../Scatter';


class Login extends Component {

  constructor(props) {
    super(props);

    this.testAccounts = require('./accounts.json');

    this.state = {
      form: {
        account: '',
        username: '',
        key: '',
        error: '',
      },
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [name]: value,
        error: '',
      },
    });
  }

  // Handle form submission to call api
  handleSubmit(event) {
    // Stop the default form submit browser behaviour
    event.preventDefault();
    // Extract `form` state
    const { form } = this.state;
    // Extract `setUser` of `UserAction`
    const { setUser } = this.props;
    // Send a login transaction to the blockchain by calling the ApiService,
    // If it successes, save the account to redux store
    // Otherwise, save the error state for displaying the message
    return ApiService.login(form)
      .then(() => {
        ApiService.getCurrentUser()
          // If the server return an account
          .then(user => {
            setUser({ account: user.account, username: user.username, balance: user.balance });
          })
      })
      .catch(err => {
        this.setState({ error: err.toString() });
      });
  }

  render() {
    // Extract data from state
    const { form, error } = this.state;

    return (
      <div className="Login">
        <div className="title">Login</div>
        <div className="description">Please use the Account Name and Private Key generated in the previous page to log into the game.</div>
        <form name="form" onSubmit={this.handleSubmit}>
          <TextField
            name="account"
            value={form.account}
            label="Account name"
            placeholder="All small letters, a-z, 1-5 or dot, max 12 characters"
            onChange={this.handleChange}
            pattern="[\.a-z1-5]{2,12}"
            required
          />
          <TextField
            name="username"
            value={form.username}
            label="Username"
            onChange={this.handleChange}
            required
          />
          <TextField
            type="password"
            name="key"
            value={form.key}
            label="Private key"
            onChange={this.handleChange}
            pattern="^.{51,}$"
            required
          />
          <div className="field form-error">
            {error && <span className="error">{error}</span>}
          </div>
          <div className="bottom">
            <Button
              type="submit"
              className="green"
              variant='contained'
              color='primary'>
              {"CONFIRM"}
            </Button>
            <Scatter />
          </div>
        </form>
        {JSON.stringify(this.testAccounts)}
      </div>
    )
  }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
  setUser: UserAction.setUser,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(Login);