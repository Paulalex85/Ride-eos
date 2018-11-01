import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Services and redux action
import { UserAction } from 'actions';
import { ApiService } from 'services';

class UpdateProfile extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Runs on every keystroke to updateuser the React state
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
        return ApiService.updateUser(form)
            .then(() => {
                setUser({ username: form.username });
            })
            .catch(err => {
                this.setState({ error: err.toString() });
            });
    }

    render() {
        // Extract data from state
        const { form, error } = this.state;

        return (
            <div className="Update">
                <div className="title">Update</div>
                <div className="description">Update informations</div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextField
                        name="username"
                        value={form.username}
                        label="Username"
                        onChange={this.handleChange}
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
                            UPDATE
                    </Button>
                    </div>
                </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
