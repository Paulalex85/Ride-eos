import React, { Component } from 'react';
// Components
import QrReader from 'react-qr-reader'
import { Button, Col, Row } from 'react-bootstrap';

class ReadQRCode extends Component {

    state = {
        result: 'No result',
        show: false,
        legacyMode: false
    }

    handleClickShow = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }

    handleClickLegacy = () => {
        this.setState({
            ...this.state,
            legacyMode: !this.state.legacyMode
        })
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
            this.props.dataQRCode(data)
        }
    }

    handleError = err => {
        console.error(err)
    }

    openImageDialog = () => {
        this.refs.qrReader.openImageDialog()
    }

    render() {
        let buttonTextShow = "";
        if (this.state.show) {
            buttonTextShow = "Hide"
        }
        else {
            buttonTextShow = "Show"
        }

        let buttonTextLegacy = "";
        if (this.state.legacyMode) {
            buttonTextLegacy = "Back to scan"
        } else {
            buttonTextLegacy = "Not working ? Submit a picture"
        }

        let QrReaderElement = "";
        if (this.state.legacyMode) {
            QrReaderElement =
                <div>
                    <Row className="mb-3">
                        <Col>
                            <Button onClick={this.openImageDialog}>
                                Submit QR Code
                    </Button>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <QrReader
                                ref="qrReader"
                                delay={300}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: '50%' }}
                                legacyMode
                            />
                        </Col>
                    </Row>
                </div>
        } else {
            QrReaderElement =
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '50%' }}
                />
        }

        return (
            <div>
                <Row className="mb-3">
                    <Col>
                        <Button onClick={this.handleClickShow}>
                            {buttonTextShow}
                        </Button>
                    </Col>
                </Row>
                {this.state.show &&
                    <div>
                        <Row className="mb-3">
                            <Col>
                                <Button onClick={this.handleClickLegacy}>
                                    {buttonTextLegacy}
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                {QrReaderElement}
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        )
    }
}

export default ReadQRCode;
