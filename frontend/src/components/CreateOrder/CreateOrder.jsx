import React, { Component } from 'react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import { FullOrder, NeedDeliver } from "./components";

class CreateOrder extends Component {

    state = {
        needDeliver: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.needDeliver}
                            onChange={this.handleChange('needDeliver')}
                            value="needDeliver"
                            color="primary"
                        />
                    }
                    label="Need Deliver"
                />
                {this.state.needDeliver === true && <NeedDeliver />}
                {this.state.needDeliver === false && <FullOrder />}
            </FormGroup>
        )
    }
}

export default CreateOrder;