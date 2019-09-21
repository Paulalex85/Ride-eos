import React, { Component } from 'react';

import { Button } from 'react-bootstrap'


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