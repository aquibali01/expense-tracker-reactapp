import React from 'react';
import './App.css';
import Header from "./components/Header";
import TotalBalance from "./components/ToatalBalance";
import AccountSummary from "./components/AccountSummary";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

import {GlobalProvider} from "./context/GlobalState"




function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header/>
      <div className="container">
        <TotalBalance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
