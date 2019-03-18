import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Form, Button, Card } from 'react-bootstrap';
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
        const { user: { username } } = this.props;

        return (
            <div >
                <Card.Text>
                    {username}
                </Card.Text>
                <Form.Control
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={this.handleChange}
                />
                <Button
                    className="mt-3"
                    onClick={this.handleSubmit}
                    variant='primary'>
                    UPDATE
                </Button>
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
