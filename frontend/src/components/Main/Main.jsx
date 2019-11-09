import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {UALContext, withUAL} from 'ual-reactjs-renderer'
import KeyGenerator from '../KeyGenerator';
import OrderDashboard from "../OrderDashboard";
import CreateOrder from "../CreateOrder/CreateOrder";
import {Menu} from './components';
import {connect} from "react-redux";
import {UserAction} from "actions";


class Main extends Component {
    static contextType = UALContext;

    async componentDidUpdate(prevProps) {
        // Via withUAL() below, access to the error object is now available
        // This error object will be set in the event of an error during any UAL execution
        const {ual: {error}} = this.props
        const {ual: {error: prevError}} = prevProps
        if (error && (prevError ? error.message !== prevError.message : true)) {
            // UAL modal will display the error message to the user, so no need to render this error in the app
            console.error('UAL Error', JSON.parse(JSON.stringify(error)))
        }
    }

    // async componentDidMount() {
    //     const {activeUser, logout} = this.context;
    //     if (activeUser) {
    //         let name = activeUser.getAccountName();
    //         if (name === null || name === undefined || name === "") {
    //             logout()
    //         }
    //     }
    // }

    displayLoginModal = (display) => {
        // Via withUAL() below, access to the showModal & hideModal functions are now available
        const {ual: {showModal, hideModal}} = this.props;
        if (display) {
            showModal()
        } else {
            hideModal()
        }
    }

    render() {
        const login = () => this.displayLoginModal(true);
        const {activeUser} = this.context;

        return (
            <BrowserRouter>
                <div>
                    <Menu login={login}/>
                    <div>
                        <Route exact path="/" component={KeyGenerator}/>
                        {activeUser &&
                        <div>
                            <Route path="/orders" component={OrderDashboard}/>
                            <Route path="/create" component={CreateOrder}/>
                        </div>
                        }
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setName: UserAction.setName
};

export default withUAL(connect(mapStateToProps, mapDispatchToProps)(Main));