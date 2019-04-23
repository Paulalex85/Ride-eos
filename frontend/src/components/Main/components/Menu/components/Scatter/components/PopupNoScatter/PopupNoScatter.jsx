import React, { Component } from "react";

import { Modal } from 'react-bootstrap';

class PopupNoScatter extends Component {

    render() {

        return (
            <Modal
                size="sm"
                show={this.props.show}
                onHide={this.props.hide}
                aria-labelledby="popupScatter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="popupScatter">
                        Scatter not found
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Please download Scatter <a href="https://get-scatter.com/" target="_blank" rel="noopener noreferrer">here</a></Modal.Body>
            </Modal>
        );
    }
}


export default PopupNoScatter;