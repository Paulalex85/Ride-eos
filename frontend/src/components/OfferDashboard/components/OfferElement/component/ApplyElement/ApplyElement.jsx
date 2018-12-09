import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ApplyElement extends Component {

    render() {
        const { apply } = this.props;

        return (
            <CardContent>
                <Typography>Apply key : {apply.applyKey}</Typography>
                <Typography>Deliver : {apply.deliver}</Typography>
            </CardContent>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(ApplyElement);
