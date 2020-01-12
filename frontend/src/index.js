import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Main} from 'components';
import {Scatter} from 'ual-scatter'
import {Lynx} from 'ual-lynx'
import {TokenPocket} from 'ual-token-pocket'
import {Ledger} from 'ual-ledger'
import {UALProvider} from 'ual-reactjs-renderer'

const appName = 'BlockDelivery';

// Chains
const chain = {
    chainId: process.env.REACT_APP_CHAIN_ID,
    rpcEndpoints: [
        {
            protocol: process.env.REACT_APP_RPC_PROTOCOL,
            host: process.env.REACT_APP_RPC_HOST,
            port: process.env.REACT_APP_RPC_PORT,
        },
    ],
};

// Authenticators
const scatter = new Scatter([chain], {appName});
const lynx = new Lynx([chain]);
const tokenPocket = new TokenPocket([chain]);
const ledger = new Ledger([chain]);

const supportedChains = [chain];
const supportedAuthenticators = [ledger, scatter, lynx, tokenPocket];

ReactDOM.render(
    <UALProvider chains={supportedChains} authenticators={supportedAuthenticators} appName={appName}>
        <Provider store={store}>
            <Main/>
        </Provider>
    </UALProvider>,
    document.getElementById('root')
);