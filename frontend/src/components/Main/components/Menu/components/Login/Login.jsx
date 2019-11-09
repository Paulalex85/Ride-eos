import React, {Component} from "react";
import {Nav, Button} from 'react-bootstrap';
import {withUAL} from 'ual-reactjs-renderer'

class Login extends Component {
    render() {
        const {login} = this.props;
        return (
            <Nav className="ml-auto">
                <Button
                    variant="primary"
                    onClick={login} >
                    Login
                </Button>
            </Nav>
        )
    }
}

export default withUAL(Login);