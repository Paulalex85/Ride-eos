import React, { Component } from "react";
import { connect } from 'react-redux';
import { ButtonLogged, Scatter } from './components'
import { Navbar } from 'react-bootstrap'

class Menu extends Component {

    render() {
        const { user: { account } } = this.props;

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    Rideos
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        account ?
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