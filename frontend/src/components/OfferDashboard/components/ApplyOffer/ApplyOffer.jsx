import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
// Services and redux action
import { OrderAction } from 'actions';

class ApplyOffer extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        this.state = {
            error: ''
        }

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
    }

    render() {

        const { error } = this.state;

        return (
            <div>
                <Button
                    onClick={this.handleClick}
                >
                    APPLY
                </Button>
                <div className="field form-error">
                    {error && <span className="error">{error}</span>}
                </div>
            </div>
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setOrder: OrderAction.setOrder,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(ApplyOffer);
