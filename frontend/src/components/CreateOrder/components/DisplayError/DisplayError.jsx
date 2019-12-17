import React, {Component} from 'react';
import {Alert, Button} from "react-bootstrap";

class DisplayError extends Component {
    render() {
        return (
            <Alert show={this.props.showError} variant="danger">
                <Alert.Heading>Order creation error</Alert.Heading>
                <p>
                    The order couldn't be created. Check account balance, permissions and connection with the wallet.
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={this.props.hide} variant="outline-danger">
                        Close
                    </Button>
                </div>
            </Alert>
        )
    }
}

export default DisplayError;
