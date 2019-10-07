import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';

import { Nav } from 'react-bootstrap';

import { UserAction } from 'actions';
import { ApiService } from 'services'
import { PopupNoScatter } from './components'

class Scatter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { setScatter, setBalance } = this.props;

        const network = ScatterJS.Network.fromJson({
            blockchain: 'eos',
            host: '127.0.0.1',
            port: 8888,
            protocol: 'http',
            chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
        });

        ScatterJS.plugins(new ScatterEOS());

        ScatterJS.connect('Rideos', { network }).then(connected => {
            if (!connected) {
                this.setState({ show: true });
            }

            window.ScatterJS = null;
            const requiredFields = { accounts: [network] };

            ScatterJS.scatter.getIdentity(requiredFields).then(() => {
                const accountScatter = ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos');
                ApiService.getBalanceAccountEOS(accountScatter.name).then((balance) => {
                    setScatter({ scatter: ScatterJS.scatter });
                    setBalance({ balance: balance });
                })
            });
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <Nav className="ml-auto" >
                <PopupNoScatter
                    show={this.state.show}
                    hide={() => this.setState({ show: false })}
                />
                <Nav.Link onClick={this.handleClick}>
                    Login with Scatter
                </Nav.Link>
            </Nav>
        );
    }

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setScatter: UserAction.setScatter,
    setBalance: UserAction.setBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(Scatter);