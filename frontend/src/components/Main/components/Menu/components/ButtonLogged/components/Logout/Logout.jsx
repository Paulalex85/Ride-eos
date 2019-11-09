import React, {Component} from "react";
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import {LinkContainer} from "react-router-bootstrap";
// Components
import {UserAction} from 'actions';

import {Button} from 'react-bootstrap';
import {UALContext} from "ual-reactjs-renderer";

class Logout extends Component {
    static contextType = UALContext;
    render() {
        const { logout } = this.context;
        return (
            <LinkContainer to="/">
                <Button
                    variant="outline-primary"
                    onClick={logout}>
                    Logout
                </Button>
            </LinkContainer>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setScatter: UserAction.setScatter,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
