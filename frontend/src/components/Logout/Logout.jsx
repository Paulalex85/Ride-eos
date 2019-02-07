import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
// Components
import { UserAction, ScatterAction } from 'actions';

class Logout extends Component {
    constructor(props) {
        super(props);

        this.logout();
    }

    logout() {
        const { history, setUser, setScatter, scatter: { scatter } } = this.props;

        setUser({ account: '', username: '', balance: '0.0000 SYS' });

        scatter.forgetIdentity();
        setScatter({ scatter: undefined });

        history.push("/");
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = {
    setUser: UserAction.setUser,
    setScatter: ScatterAction.setScatter,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
