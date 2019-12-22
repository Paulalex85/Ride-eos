import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Col, Row} from 'react-bootstrap';
// Components
import QRCode from 'qrcode.react'
import {createKeyOrder} from '../../../../../../../../utils/OrderTools'
import {UALContext} from "ual-reactjs-renderer";

class GenerateQRCode extends Component {
    static contextType = UALContext;

    constructor(props) {
        super(props);
        this.state = {
            key: "",
            hash: ""
        }
    }

    componentDidMount = async () => {
        this.getKeyOfOrder()
    };

    componentDidUpdate = prevProps => {
        if (this.props.order.state !== prevProps.order.state) {
            this.getKeyOfOrder();
        }
    };

    needToGenerate = (state, currentActor) => {
        return (state === "3" && currentActor === "seller")
            || (state === "4" && currentActor === "buyer");

    };

    getKeyOfOrder = async () => {
        const {order, order: {state, currentActor}} = this.props;
        const {activeUser} = this.context;
        if (this.needToGenerate(state, currentActor)) {
            let keyObject = await createKeyOrder(activeUser, order);
            this.setState({
                key: keyObject.key,
                hash: keyObject.hash
            });
        }
    };

    render() {
        let isPrint = false;

        if (this.state.key !== "") {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                <div>
                    <h5>Code for validation</h5>
                    <Row className="mb-3">
                        <Col>
                            Scan the QR code or send this : {this.state.key}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <QRCode
                                value={this.state.key}
                                size={256}
                            />
                        </Col>
                    </Row>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(GenerateQRCode);
