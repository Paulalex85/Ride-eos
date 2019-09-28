import React, { Component } from 'react';
// Components
import QrReader from 'react-qr-reader'
import { Button } from 'react-bootstrap';

class ReadQRCode extends Component {

    state = {
        result: 'No result',
        show: false
    }

    handleClick = () => {
        if (this.state.show) {
            this.setState({
                ...this.state,
                show: false
            })
        } else {
            this.setState({
                ...this.state,
                show: true
            })
        }
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }

    handleError = err => {
        console.error(err)
    }

    render() {
        let buttonText = "";
        if (this.state.show) {
            buttonText = "Hide"
        }
        else {
            buttonText = "Show"
        }

        return (
            <div>
                <Button onClick={this.handleClick} >
                    {buttonText}
                </Button>
                {this.state.show &&
                    <div>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                        <p>{this.state.result}</p>
                    </div>
                }
            </div>
        )
    }
}

export default ReadQRCode;
