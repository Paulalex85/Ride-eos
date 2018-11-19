import React, { Component } from 'react';
//import randomBytes from 'random-bytes';
import Button from '@material-ui/core/Button';
import ecc from 'eosjs-ecc'
import sha from 'sha.js';

class KeyGenerator extends Component {
    constructor(props){
        super(props);
        this.handleGenerator = this.handleGenerator.bind(this);
    }

    state = {
        hash: '',
        key: '',
        hashBis: '',
    }

    handleGenerator(){
        //let key = ecc.sha256(randomBytes.sync(32));
        let key = "62697465";
        this.setState({
            key: key,
            hash: ecc.sha256(Buffer.from(key,'hex')),
            hashBis: sha('sha256').update(key).digest('hex')
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
                Hash : {this.state.hash}<br />
                HashBis : {this.state.hashBis}
            </div>
        );
    }
}

export default KeyGenerator;