import { Component } from 'react';
import React from "react";
import './App.css';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    role: '',
    message: '',
    isHidden: true,
  };

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.firstname !== '' & this.state.lastname !== '' & this.state.phonenumber !== '' & this.state.role !== '') {
      if (this.state.isHidden === true) {
        document.querySelector('popup').classList.remove('hide');
        this.setState({
          [event.target.name]: false,
        });
      };
    };
  };
  cancelHandler = (event) => {
    document.querySelector('popup').classList.add('hide');
    this.setState({
      [event.target.name]: true,
    });
  }
  confirmHandler = (event) => {
    document.querySelector('popup').classList.add('hide');
    document.querySelectorAll('.mainInput').forEach((elem) => {
      elem.value = '';
    });
    this.setState({
      firstname: '',
      lastname: '',
      phonenumber: '',
      role: '',
      message: '',
      isHidden: true,
    });
    document.querySelector('.defaultOption').setAttribute('selected', 'selected');
  };
  
  
  

  render() {
    return (
      <>
      <Header />
      <main>
        <Form inputhandler={this.formHandler} submithandler={this.submitHandler} />
        <View firstname={this.state.firstname} lastname={this.state.lastname} phonenumber={this.state.phonenumber} role={this.state.role} message={this.state.message} />
        <Popup cancelHandler={this.cancelHandler} confirmHandler={this.confirmHandler} firstname={this.state.firstname} lastname={this.state.lastname} phonenumber={this.state.phonenumber} role={this.state.role} message={this.state.message} />
      </main>
      <Footer />
      </>
    );
  };
};

export default App;
