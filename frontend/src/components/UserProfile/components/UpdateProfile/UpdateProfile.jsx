import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Services and redux action
import { UserAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class UpdateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: props.user.username
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
            },
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { form: { username } } = this.state;
        const { setUser, user: { account }, scatter: { scatter } } = this.props;

        return ApiServiceScatter.updateUser(username, scatter).then(() => {
            ApiService.getUserByAccount(account).then(user => {
                setUser({ account: user.account, username: user.username, balance: user.balance });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { form } = this.state;

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
                    />
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
