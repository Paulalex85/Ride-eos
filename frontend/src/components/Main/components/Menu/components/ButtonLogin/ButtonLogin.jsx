import React, { Component } from "react";
import { Nav } from 'react-bootstrap';

class ButtonLogin extends Component {

    render() {
        return (
            <Nav className="ml-auto">
                <Nav.Link href="/login">
                    Login with Scatter
                </Nav.Link>
            </Nav>
        )
    }
}

export default ButtonLogin