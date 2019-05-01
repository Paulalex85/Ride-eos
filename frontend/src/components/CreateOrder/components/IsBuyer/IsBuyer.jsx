import React, { Component } from 'react';
// Components
import { Card, Button } from 'react-bootstrap';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';

class IsBuyer extends Component {

    render() {
        return (
            <Card>
                <Card.Header>
                    <div onClick={() => this.props.changePage(-1)}>
                        <Octicon
                            className="float-left"
                            size='medium'
                            icon={getIconByName("arrow-left")} />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Order
                    </Card.Text>
                    <Button variant='primary'
                        className="float-right"
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