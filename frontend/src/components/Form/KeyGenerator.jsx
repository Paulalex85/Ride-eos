import React, { Component } from 'react';
import randomBytes from 'random-bytes';
import Button from '@material-ui/core/Button';
import ecc from 'eosjs-ecc'

class KeyGenerator extends Component {
    constructor(props){
        super(props);
        this.handleGenerator = this.handleGenerator.bind(this);
    }

    state = {
        hash: '',
        key: '',
    }

    handleGenerator(){
        let key = ecc.sha256(randomBytes.sync(32));
        this.setState({
            key: key,
            hash: ecc.sha256(key)
        });
    }

    render(){
        return(
            <div>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={this.handleGenerator}>
                    Generate Key
                </Button><br />
                Key : {this.state.key}<br />
                Hash : {this.state.hash}
            </div>
        );
    }
}

export default KeyGenerator;