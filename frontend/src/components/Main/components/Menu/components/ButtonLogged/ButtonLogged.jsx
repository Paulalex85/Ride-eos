import React, { Component } from "react";
import { Nav } from 'react-bootstrap';

import { Logout } from './components'

class ButtonLogged extends Component {

    render() {
        return (
            <Nav className="ml-auto">
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/createOrder">Create Order</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/assign">Assign Place</Nav.Link>
                <Nav.Link href="/offers">Offers</Nav.Link>
                <Logout />
            </Nav>
        )
    }
}

export default ButtonLogged