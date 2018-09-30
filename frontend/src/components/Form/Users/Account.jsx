import React, { Component } from 'react';
import PropTypes from 'prop-types'

// material-ui dependencies
import TextField from '@material-ui/core/TextField';

class Account extends Component{

    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this);
        this.name = this.props.name;
        this.label = this.props.label;
    }

    PropTypes = {
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }

    handleFormEvent(event) {
        event.preventDefault();

        const value = event.target.value;

        this.props.onChange(this.name,value);
    }

    render(){
        return(
            <TextField
                name={this.name}
                autoComplete="off"
                label={this.label}
                margin="normal"
                onChange={this.handleFormEvent}
            />
        )
    }
}

export default Account;