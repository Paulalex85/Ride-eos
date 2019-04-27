import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Button } from 'react-bootstrap'


class NewOrder extends Component {

    render() {
        return (
            <LinkContainer to="/create">
                <Button
                    variant='primary'>
                    Create order
                </Button>
            </LinkContainer>
        );
    }
}

export default NewOrder;