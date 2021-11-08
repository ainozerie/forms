import { Component } from 'react';
import React from "react";
import './App.css';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    role: '',
    message: '',
    viewdisplay: 'none'
  };
  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  

  render() {
    return (
      <main>
        <Form inputhandler={this.formHandler}/>
        <View firstname={this.state.firstname} lastname={this.state.lastname} phonenumber={this.state.phonenumber} role={this.state.role} message={this.state.message} />
        <Popup />
      </main>
    );
  };
};

export default App;
