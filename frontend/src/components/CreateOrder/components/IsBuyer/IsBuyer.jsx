import React, { Component } from 'react';
// Components
import { Card, Button } from 'react-bootstrap';


class IsBuyer extends Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        Order
                    </Card.Text>
                    <Button variant='primary'
                        onClick={() => this.props.changePage(1)}>
                        Next
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

// Export a redux connected component
export default IsBuyer;