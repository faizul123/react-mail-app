import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification'
// import Header from './components/Header'
// import MailComposer from './components/MailCompose'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Login />
      <Notification text="Hi, welcome to mail app" />
    </div>
  );
}

export default App;
