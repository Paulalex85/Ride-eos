import React, {Component} from "react";
import {connect} from 'react-redux';

import {UserAction} from 'actions';
import {Col, Row} from 'react-bootstrap'
import {ApiServiceReader} from 'services';
import {UALContext} from "ual-reactjs-renderer";

class Balance extends Component {
    static contextType = UALContext;

    async componentDidMount() {
        const {setBalance} = this.props;
        const {activeUser} = this.context;
        if (activeUser) {
            activeUser.getAccountName().then(name => {
                ApiServiceReader.getBalanceAccountEOS(name).then((balance) => {
                    setBalance({balance: balance});
                })
            }).catch(error => {
                console.error(error);
            });
        }
    }

    render() {

        const {user: {balance}} = this.props;
        return (
            <Row className="justify-content-md-center mt-1 mb-5">
                <Col className="col-md-auto">
                    <h5>Balance : {balance}</h5>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setBalance: UserAction.setBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);