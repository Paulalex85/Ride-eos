import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
// Components
import { UserAction, ScatterAction } from 'actions';

import { Nav } from 'react-bootstrap';

class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { history, setUser, setScatter, scatter: { scatter } } = this.props;

        setUser({ account: '', username: '', balance: '0.0000 SYS' });

        scatter.forgetIdentity();
        setScatter({ scatter: undefined });

        history.push("/");
    }

    render() {
        return (
            <Nav.Link onClick={this.handleClick}>
                Logout
            </Nav.Link>
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = {
    setUser: UserAction.setUser,
    setScatter: ScatterAction.setScatter,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
