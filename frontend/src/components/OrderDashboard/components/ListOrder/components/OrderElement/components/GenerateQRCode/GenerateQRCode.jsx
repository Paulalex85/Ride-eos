import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
// Components
import QRCode from 'qrcode.react'

class GenerateQRCode extends Component {

    render() {

        const { order } = this.props;

        let isPrint = false;

        if ((order.state === "3" && order.currentActor === "seller")
            || (order.state === "4" && order.currentActor === "buyer")) {
            isPrint = true;
        }

        return (
            <div>
                {isPrint &&
                    <div>
                        <h5>Code for validation</h5>
                        <Row className="mb-3">
                            <Col>
                                <QRCode
                                    value={"jambon"}
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

export default GenerateQRCode;
