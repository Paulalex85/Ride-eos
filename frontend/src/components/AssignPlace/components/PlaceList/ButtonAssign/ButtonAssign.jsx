import React, { Component } from 'react';

import { Button } from '@material-ui/core';

class ButtonAssign extends Component {
    handleClick = () => {
        this.props.onAssignClick(this.props.value);
    }

    render() {
        return (
            <Button
                className="green"
                variant='contained'
                color='primary'
                onClick={this.handleClick}
            >
                ASSIGN
            </Button>
        );
    }
}

export default ButtonAssign