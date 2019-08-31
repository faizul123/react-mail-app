import React from 'react';
import './App.css';
import { notify } from './components/Notification'
import {DefaultButton, DefaultButton_SZ2,DefaultButton_SZ3,PrimaryButton,PrimaryButton_SZ2,PrimaryButton_SZ3} from './components/ui-elements/Controls/Controls'

class App extends React.Component {
  
  componentDidMount(){
      notify("Hi, welcome to mailapp","success")
  }

  render() {
    return (<div className="App">
      <DefaultButton text="I'm Button"/>
      <DefaultButton_SZ2 text="I'm Button"/>
      <DefaultButton_SZ3 text="I'm Button"/>
      <br/>
      <hr/>
      <PrimaryButton text="I'm Button"/>
      <PrimaryButton_SZ2 text="I'm Button"/>
      <PrimaryButton_SZ3 text="I'm Button"/>
      <br/>
      <hr/>
    </div>
    );
  }
}

export default App;
