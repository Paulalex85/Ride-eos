import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Button from '@material-ui/core/Button';
import { UserAction } from 'actions';

class Logout extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);

        // Bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    // Runs on every keystroke to updateuser the React state
    handleClick(event) {
        event.preventDefault();

        const { setUser } = this.props;

        setUser({ account: '', username: '' });

        localStorage.removeItem("userAccount");
        localStorage.removeItem("privateKey");
    }

    render() {

        return (
            <Button
                onClick={this.handleClick}
                className="green"
                variant='contained'
                color='primary'
            >
                LOGOUT
                </Button>
        )
    }
}
// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setUser: UserAction.setUser,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
