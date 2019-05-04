import React, { Component } from 'react';
// Components
import { Card, Button } from 'react-bootstrap';

import { AccountInput } from '../'

class BuyerInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.buyer
        }
    }

    handleChange = (value) => {
        this.setState({
            name: value
        })

        this.props.handleChange(value, "buyer")
    }

    render() {
        return (
            <Card className="text-center" >
                <Card.Header>
                    Buyer
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Buyer
                    </Card.Text>
                    <AccountInput handleChange={this.handleChange} />
                    <Button variant='primary'
                        className="float-right"
                        onClick={() => this.props.changePage(1)}>
                        Next
                    </Button>
                </Card.Body>
            </Card >
        )
    }
}

// Export a redux connected component
export default BuyerInfo;