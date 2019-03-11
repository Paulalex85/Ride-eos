import React, { Component } from "react";
import { Nav } from 'react-bootstrap';

class ButtonLogged extends Component {

    render() {
        return (
            <Nav className="ml-auto">
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/createOrder">Create Order</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/assign">Assign Place</Nav.Link>
                <Nav.Link href="/offers">Offers</Nav.Link>
                <Nav.Link href="/logout">
                    Logout
                </Nav.Link>
            </Nav>
        )
    }
}

export default ButtonLogged