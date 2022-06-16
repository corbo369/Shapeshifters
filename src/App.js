import React from 'react'
import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import MainMint from './MainMint';

export default function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    <div className="moving-background"></div>
  </div>
  );
}


