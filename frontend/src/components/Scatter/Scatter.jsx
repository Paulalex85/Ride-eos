import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';

import { UserAction, ScatterAction } from 'actions';
import { ApiService, ApiServiceScatter } from 'services';

class Scatter extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { setScatter, setUser } = this.props;

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
                ApiService.getUserByAccount(account.name).then(user => {
                    if (user === undefined || user.account !== account.name) {
                        ApiServiceScatter.adduser(account.name, ScatterJS.scatter).then(() => {
                            ApiService.getUserByAccount(account.name).then(user => {
                                setUser({ account: user.account, username: user.username, balance: user.balance });
                            })
                        });
                    } else {
                        setUser({ account: user.account, username: user.username, balance: user.balance });
                    }
                });

            });
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <div>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={this.handleClick}>
                    Scatter
                </Button>
            </div >
        );
    }

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setScatter: ScatterAction.setScatter,
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scatter);