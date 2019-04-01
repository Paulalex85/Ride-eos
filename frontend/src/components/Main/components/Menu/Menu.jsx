import React, { Component } from "react";
import { connect } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";
import { ButtonLogged, Scatter } from './components'
import { Navbar } from 'react-bootstrap'

class Menu extends Component {

    render() {
        const { scatter: { scatter } } = this.props;

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        Rideos
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        scatter ?
                            (<ButtonLogged />) :
                            (<Scatter />)
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Menu);