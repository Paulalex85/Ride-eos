import React, {Component} from "react";
import {UALContext} from 'ual-reactjs-renderer'
import {LinkContainer} from "react-router-bootstrap";
import {ButtonLogged, Login} from './components'
import {Navbar} from 'react-bootstrap'

class Menu extends Component {
    static contextType = UALContext;

    render() {
        const {login} = this.props;
        const {activeUser} = this.context;
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        Rideos
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    {
                        activeUser
                            ? (<ButtonLogged/>)
                            : (<Login login={login}/>)
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;