import React, { Component } from 'react';
import Account from './Account';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormAPI from './FormAPI';

class FormManager extends Component {
    constructor(props){
      super(props)

      this.handleChange = this.handleChange.bind(this);
      this.handleEosChange = this.handleEosChange.bind(this);
    }

    state = {
        formToShow: 'add',
        privateKey: '',
        account: '',
        publicKey:'',
    };

    handleChange(event) {
        this.setState({formToShow: event.target.value});
    }

    handleEosChange(name,value) {
        this.setState({
            [name]:value
        });
    }
    
    render() {   
        return (
            <div>
                <FormControl>
                    <Account 
                        name='account'
                        label='Account'
                        onChange={this.handleEosChange}/>
                    <Account 
                        name='privateKey'
                        label='Private Key'
                        onChange={this.handleEosChange}/>
                    <Account 
                        name='publicKey'
                        label='Public Key'
                        onChange={this.handleEosChange}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Send to EOS</InputLabel>
                    <Select
                        value={this.state.formToShow}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={'add'}>Add</MenuItem>
                        <MenuItem value={'update'}>Update</MenuItem>
                        <MenuItem value={'deposit'}>Deposit</MenuItem>
                        <MenuItem value={'withdraw'}>Withdraw</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormAPI 
                        globalInfo={this.state}
                    />
                </FormControl>
            </div>
        );
    }
}

export default FormManager;