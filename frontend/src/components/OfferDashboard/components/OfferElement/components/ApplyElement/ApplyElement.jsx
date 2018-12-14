import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { DeleteApply, ChooseDeliver } from './components';

class ApplyElement extends Component {

    render() {
        const { apply, offer } = this.props;

        return (
            <CardContent>
                <Typography>Apply key : {apply.applyKey}</Typography>
                <Typography>Deliver : {apply.deliver}</Typography>
                <DeleteApply apply={apply} />
                <ChooseDeliver apply={apply} offer={offer} />
            </CardContent >
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;


// Export a redux connected component
export default connect(mapStateToProps)(ApplyElement);
