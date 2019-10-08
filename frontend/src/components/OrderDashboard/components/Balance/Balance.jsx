import React, { Component } from "react";
import { connect } from 'react-redux';

import { UserAction } from 'actions';
import { Col, Row } from 'react-bootstrap'
import { ApiService } from 'services';

class Balance extends Component {
    constructor(props) {
        super(props);

        this.setBalanceValue();
    }

    setBalanceValue = () => {
        const { setBalance, user: { scatter } } = this.props;
        const accountScatter = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        ApiService.getBalanceAccountEOS(accountScatter.name).then((balance) => {
            setBalance({ balance: balance });
        }).catch(error => {
            console.error(error);
        });
    }

    render() {

        const { user: { balance } } = this.props;
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