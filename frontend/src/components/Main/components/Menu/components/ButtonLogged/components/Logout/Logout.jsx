import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";
// Components
import { ScatterAction } from 'actions';

import { Nav } from 'react-bootstrap';

class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { history, setScatter, scatter: { scatter } } = this.props;

        scatter.forgetIdentity();
        setScatter({ scatter: undefined });

        history.push("/");
    }

    render() {
        return (
            <LinkContainer to="/">
                <Nav.Link onClick={this.handleClick}>
                    Logout
                </Nav.Link>
            </LinkContainer>
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = {
    setScatter: ScatterAction.setScatter,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
