import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";

import MarketDashboard from '../MarketDashboard';
import OrderDashboard from '../OrderDashboard';
import UserProfile from '../UserProfile';

import "./Main.css";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="body">
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/orders">Orders</NavLink></li>
                        <li><NavLink to="/market">Market</NavLink></li>
                    </ul>
                    <div className="content">
                        {/* <Route exact path="/" component={} /> */}
                        <Route path="/profile" component={UserProfile} />
                        <Route path="/orders" component={OrderDashboard} />
                        <Route path="/market" component={MarketDashboard} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;