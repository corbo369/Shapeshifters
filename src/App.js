import { React, useState } from 'react'
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavBar from './NavBar';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Pool from './pages/Pool';

export default function App() {

  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mint" element={<Mint accounts={accounts} setAccounts={setAccounts} />}/>
        <Route path="/pool" element={<Pool accounts={accounts} setAccounts={setAccounts} />}/>
      </Routes>
    <div className="moving-background"></div>
  </div>
  );
}


