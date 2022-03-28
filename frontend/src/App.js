import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import './App.css';
import Navbar from './components/Navbar';
import Mint from './components/Mint';

const App = () => {
  const [accounts, setAccounts] = useState([]);

  const { authenticate } = useMoralis();

  return (
    <div className="container">
      <Navbar accounts={accounts} setAccounts={setAccounts} />

      <main>
        <Mint accounts={accounts} setAccounts={setAccounts} />
        <p>View NFT collection here - <a href="https://opensea.io/collection/polydao-official" rel="noreferrer" target="_blank">OpenSea</a></p>
      </main>
    </div>
  );
}

export default App;
