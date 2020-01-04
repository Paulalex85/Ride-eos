import React, {Component} from "react";
import {Button, Col} from 'react-bootstrap';
import {UALContext} from 'ual-reactjs-renderer'
import {LinkContainer} from "react-router-bootstrap";

class LoginButtonLandingPage extends Component {
    static contextType = UALContext;

    render() {
        const {login} = this.props;
        const {activeUser} = this.context;
        return (
            <Col>
                {
                    activeUser ?
                        <LinkContainer to="/orders">
                            <Button
                                className="btn btn-lg btn-primary">
                                Order page
                            </Button>
                        </LinkContainer>
                        :
                        <Button
                            onClick={login}
                            className="btn btn-lg btn-primary">
                            Start now !
                        </Button>
                }
            </Col>
        )
    }
}

export default LoginButtonLandingPage;