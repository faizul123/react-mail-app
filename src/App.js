import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import MailComposer from './components/MailCompose'

function App() {
  return (
    <div className="App">
      <Header />
      <MailComposer />
    </div>
  );
}

export default App;
