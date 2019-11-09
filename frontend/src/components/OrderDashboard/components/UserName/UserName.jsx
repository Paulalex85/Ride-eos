import React, {Component} from "react";
import {connect} from 'react-redux';
import {UserAction} from "actions";
import {Col, Row} from 'react-bootstrap'
import {UALContext} from 'ual-reactjs-renderer'

class UserName extends Component {
    static contextType = UALContext;
    state = {
        accountName: ""
    };

    async componentDidMount() {
        const {activeUser} = this.context;
        if (activeUser) {
            activeUser.getAccountName().then(name => {
                this.setState({accountName: name});
            });
        }
    }

    render() {
        return (
            <Row className="justify-content-md-center mt-4">
                <Col className="col-md-auto">
                    <h5>EOS Username : {this.state.accountName}</h5>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setName: UserAction.setName
};

export default connect(mapStateToProps, mapDispatchToProps)(UserName);