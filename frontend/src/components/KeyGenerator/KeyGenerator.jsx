import React, { Component } from 'react';

import { Button } from 'react-bootstrap'

import ecc from 'eosjs-ecc';
import randomstring from 'randomstring';

class KeyGenerator extends Component {
    constructor(props) {
        super(props);
        this.handleGenerator = this.handleGenerator.bind(this);
    }

    state = {
        hash: '',
        key: '',
    }

    handleGenerator() {
        let key = randomstring.generate({
            length: 64,
            charset: 'hex'
        });

        this.setState({
            key: key,
            hash: ecc.sha256(new Buffer(key, 'hex'))
        });
    }

    render() {
        return (
            <div>
                <Button
                    variant='primary'
                    onClick={this.handleGenerator}>
                    Generate Key
                </Button><br />
                Key : {this.state.key}<br /><br />
                Hash : {this.state.hash}<br />
            </div>
        );
    }
}

export default KeyGenerator;