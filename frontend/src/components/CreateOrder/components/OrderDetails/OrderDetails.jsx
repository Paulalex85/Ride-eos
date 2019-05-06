import React, { Component } from 'react';
// Components
import { Card, Button, Form } from 'react-bootstrap';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';


class OrderDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            details: this.props.details
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            details: value
        })

        this.props.handleChange(value, "details")
    }

    render() {

        let returnPage = "";
        if (!this.props.firstPage) {
            returnPage = <div onClick={() => this.props.changePage(-1)}>
                <Octicon
                    className="float-left"
                    size='medium'
                    icon={getIconByName("arrow-left")} />
            </div>
        }

        return (
            <Card className="text-center" >
                <Card.Header>
                    {returnPage}
                    {this.props.titleHeader}
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Details of the order</Form.Label>
                        <Form.Control as="textarea" onChange={this.handleChange} value={this.state.details} />
                    </Form.Group>
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
export default OrderDetails;