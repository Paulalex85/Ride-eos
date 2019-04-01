import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    Route,
    BrowserRouter
} from "react-router-dom";

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';

import { ScatterAction } from 'actions';

import OrderDashboard from '../OrderDashboard';
import KeyGenerator from '../KeyGenerator';
import { Menu } from './components';


class Main extends Component {
    constructor(props) {
        super(props);

        this.getCurrentUser();
    }

    getCurrentUser() {
        const { setScatter, scatter: { scatter } } = this.props;

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
        }
        else {
            ScatterJS.connect('Rideos', { network }).then(connected => {
                if (connected) {
                    console.log("connected")
                    setScatter({ scatter: ScatterJS.scatter });
                }
            });
        }
    }

    render() {

        const { scatter: { scatter } } = this.props;

        return (
            <BrowserRouter>
                <div className="body">
                    <Menu />
                    <div classNaaccountme="content">
                        <Route exact path="/" component={KeyGenerator} />
                        {scatter &&
                            <div>
                                <Route path="/orders" component={OrderDashboard} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);