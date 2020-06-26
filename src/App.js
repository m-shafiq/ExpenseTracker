import React from 'react';

import './index.css';

import {Header} from './components/Header';
import {Balance} from './components/Balance';

import {AccountSummary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
function App() {
  return (
    <div >
        <Header />
        <div className="container">
        < Balance />
        <AccountSummary />
        
        </div>
        <div>
        <TransactionHistory />
        </div>
    </div>
  );
}

export default App;
