import React from 'react';
import './App.css';
import { notify } from './components/Notification'
import {
  DefaultButton, 
  DefaultButton_SZ2,
  DefaultButton_SZ3,
  PrimaryButton,
  PrimaryButton_SZ2,
  PrimaryButton_SZ3, 
  TextBox, 
  TextBoxAndLabel, 
  TextBoxAndIcon, 
  MaterialTextBox, 
  CheckBox, 
  CheckBox2,
  Select
} from './components/ui-elements/Controls/Controls'

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
      <TextBox name="username" size="50" label="Enter your name" />
      <TextBoxAndLabel name="username" size="30" label="Enter username" />
      <TextBoxAndIcon name="username" icon="fa fa-spinner fa-spin"/>
      <MaterialTextBox />
      <hr/>
      <span className="warning font-16px">Ex:somedomin@domain.com</span> 
      <hr/>
      <CheckBox />
      <CheckBox2 />
      <hr/>
      <Select />
    </div>
    );
  }
}

export default App;
