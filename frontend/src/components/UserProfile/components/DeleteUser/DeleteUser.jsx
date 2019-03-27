import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
// Components
import { Button } from 'react-bootstrap';
// Services and redux action
import { UserAction, ScatterAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class DeleteUser extends Component {

    handleClick = () => {
        const { history, setUser, setScatter, user: { account }, scatter: { scatter } } = this.props;

        return ApiServiceScatter.deleteuser(scatter).then(() => {
            ApiService.getUserByAccount(account).then(user => {
                setUser({ account: '', username: '', balance: '0.0000 SYS' });
                scatter.forgetIdentity();
                setScatter({ scatter: undefined });
                history.push("/");
            })
        }).catch((err) => { console.error(err) });
    }

    render() {

        return (
            <Button
                className="mt-3"
                onClick={this.handleClick}
                variant='danger'>
                DELETE ACCOUNT
            </Button>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setUser: UserAction.setUser,
    setScatter: ScatterAction.setScatter,
};

// Export a redux connected component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteUser));
