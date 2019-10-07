import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Row } from 'react-bootstrap';
// Components
import QRCode from 'qrcode.react'
import { KeyGenerator } from 'services';

class GenerateQRCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: "",
            hash: ""
        }
    }

    async componentDidMount() {
        this.getKeyOfOrder()
    }

    componentDidUpdate(prevProps) {
        if (this.props.order.state !== prevProps.order.state) {
            this.getKeyOfOrder()
        }
    }

    needToGenerate = (state, currentActor) => {
        if ((state === "3" && currentActor === "seller")
            || (state === "4" && currentActor === "buyer")) {
            return true;
        }
        return false
    }

    getKeyOfOrder = async () => {
        const { order, order: { state, orderKey, currentActor, takeverification, deliveryverification }, user: { scatter } } = this.props;
        if (this.needToGenerate(state, currentActor)) {
            let localStorageKey = KeyGenerator.getKey(orderKey, currentActor)
            let found = false;

            if (localStorageKey !== undefined) {
                if ((currentActor === "seller" && takeverification === localStorageKey.hash)
                    || (currentActor === "buyer" && deliveryverification === localStorageKey.hash)) {
                    this.setState({
                        key: localStorageKey.key,
                        hash: localStorageKey.hash
                    });
                    found = true;
                }
            }

            if (!found) {
                let keyObject = await KeyGenerator.createKeyForDelivery(order, scatter)
                this.setState({
                    key: keyObject.key,
                    hash: keyObject.hash
                });
                KeyGenerator.purgeStore(order, currentActor)
                KeyGenerator.storeKey(orderKey, keyObject.key, keyObject.hash, currentActor)
            }
        }
    }

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
