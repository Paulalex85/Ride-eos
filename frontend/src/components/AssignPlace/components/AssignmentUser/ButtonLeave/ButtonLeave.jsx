import React, { Component } from 'react';

import { Button } from '@material-ui/core';

class ButtonLeave extends Component {
    handleClick = () => {
        this.props.onLeaveClick(this.props.value);
    }

    render() {
        return (
            <Button
                className="green"
                variant='contained'
                color='primary'
                onClick={this.handleClick}
            >
                LEAVE
            </Button>
        );
    }
}

export default ButtonLeave