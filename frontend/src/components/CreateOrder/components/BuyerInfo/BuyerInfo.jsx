
import React, { Component } from 'react';
// Components
import { Card, Button } from 'react-bootstrap';


class BuyerInfo extends Component {

    render() {

        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        Info
                    </Card.Text>
                    <Button variant='primary'
                        onClick={this.props.changePage}
                        value={1}>
                        Next
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

// Export a redux connected component
export default BuyerInfo;