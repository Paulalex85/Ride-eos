import React, { Component } from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


import { Logout } from './components'

class ButtonLogged extends Component {

    render() {
        return (
            <Nav className="ml-auto">
                <LinkContainer to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/createOrder">
                    <Nav.Link>Create Order</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/orders">
                    <Nav.Link>Orders</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/assign">
                    <Nav.Link>Assign Place</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/offers">
                    <Nav.Link>Offers</Nav.Link>
                </LinkContainer>
                <Logout />
            </Nav>
        )
    }
}

export default ButtonLogged