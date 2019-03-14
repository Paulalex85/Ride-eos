import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    Route,
    BrowserRouter
} from "react-router-dom";

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';

import { UserAction, ScatterAction } from 'actions';
import { ApiService } from 'services';

import AssignPlace from '../AssignPlace';
import OrderDashboard from '../OrderDashboard';
import UserProfile from '../UserProfile';
import CreateOrder from '../CreateOrder';
import OfferDashboard from '../OfferDashboard';
import KeyGenerator from '../KeyGenerator';
import { Menu } from './components';


class Main extends Component {
    constructor(props) {
        super(props);

        this.getCurrentUser();
    }

    getCurrentUser() {
        const { setUser, setScatter, scatter: { scatter } } = this.props;

        const network = ScatterJS.Network.fromJson({
            blockchain: 'eos',
            host: '127.0.0.1',
            port: 8888,
            protocol: 'http',
            chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
        });

        ScatterJS.plugins(new ScatterEOS());

        if (scatter !== undefined) {
            console.log("scatter ok")
            const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

            ApiService.getUserByAccount(account.name).then(user => {
                setUser({ account: user.account, username: user.username, balance: user.balance });
            }).catch((err) => { console.error(err) });
        }
        else {
            ScatterJS.connect('Rideos', { network }).then(connected => {
                if (connected) {
                    console.log("connected")

                    const account = ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos');
                    setScatter({ scatter: ScatterJS.scatter });
                    console.log(account)

                    ApiService.getUserByAccount(account.name).then(user => {
                        setUser({ account: user.account, username: user.username, balance: user.balance });
                    }).catch((err) => { console.error(err) });
                }
            });
        }
    }

    render() {

        const { user: { account } } = this.props;

        return (
            <BrowserRouter>
                <div className="body">
                    <Menu />

                    <div className="content">
                        <Route exact path="/" component={KeyGenerator} />
                        {account &&
                            <div>
                                <Route path="/profile" component={UserProfile} />
                                <Route path="/createOrder" component={CreateOrder} />
                                <Route path="/orders" component={OrderDashboard} />
                                <Route path="/assign" component={AssignPlace} />
                                <Route path="/offers" component={OfferDashboard} />
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
    setScatter: ScatterAction.setScatter,
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);