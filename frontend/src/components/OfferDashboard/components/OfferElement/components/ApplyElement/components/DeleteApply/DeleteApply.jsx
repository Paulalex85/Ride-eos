import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { ApplyAction } from 'actions';
import { ApiService } from 'services';

class DeleteApply extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const { setListApplies, apply: { applyKey } } = this.props;

        ApiService.cancelApply(applyKey).then(() => {
            ApiService.getApplies().then(applies => {
                const { offers: { listOffers } } = this.props;
                setListApplies({ listOffers: listOffers, listApplies: applies });
            })
        }).catch((err) => { console.error(err) });
    }

    render() {
        const { apply, user: { account } } = this.props;

        return (
            <div>
                {
                    apply.deliver === account &&
                    <Button variant="contained" color="secondary" onClick={this.handleClick}>
                        Delete
                    <DeleteIcon />
                    </Button>
                }
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListApplies: ApplyAction.setListApplies,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(DeleteApply);
