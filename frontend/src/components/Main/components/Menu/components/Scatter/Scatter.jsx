import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';

import { Nav } from 'react-bootstrap';

import { ScatterAction } from 'actions';
import { ApiServiceScatter } from 'services';

class Scatter extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { setScatter } = this.props;

        const network = ScatterJS.Network.fromJson({
            blockchain: 'eos',
            host: '127.0.0.1',
            port: 8888,
            protocol: 'http',
            chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
        });

        ScatterJS.plugins(new ScatterEOS());

        ScatterJS.connect('Rideos', { network }).then(connected => {
            if (!connected) return console.error('no scatter');

            window.ScatterJS = null;
            const requiredFields = { accounts: [network] };

            ScatterJS.scatter.getIdentity(requiredFields).then(() => {
                const account = ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos');
                setScatter({ scatter: ScatterJS.scatter });
                ApiServiceScatter.updatePermission(account, process.env.REACT_APP_EOSIO_CONTRACT_USERS, ScatterJS.scatter);
            });
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <Nav className="ml-auto" >
                <Nav.Link onClick={this.handleClick}>
                    Login with Scatter
                </Nav.Link>
            </Nav>
        );
    }

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setScatter: ScatterAction.setScatter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scatter);