import { Component } from 'react';
import React from "react";
import './App.css';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';
import axios from 'axios';

class App extends Component {
  state = {
    inputData: {
      firstname: '',
      lastname: '',
      phonenumber: '',
      role: '',
      message: ''
    },
    isHidden: true,
    data: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/notes")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res);
        console.log(res.data);
      });
  };


  formHandler = (event) => {
    this.setState({
      // we need to open object in state ...this.state.inputData
      inputData: { ...this.state.inputData, [event.target.name]: event.target.value } 
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
  // confirmHandler = (event) => {
  //   document.querySelector('popup').classList.add('hide');
  //   document.querySelectorAll('.mainInput').forEach((elem) => {
  //     elem.value = '';
  //   });
  //   this.setState({
  //     firstname: '',
  //     lastname: '',
  //     phonenumber: '',
  //     role: '',
  //     message: '',
  //     isHidden: true,
  //   });
  //   document.querySelector('.defaultOption').setAttribute('selected', 'selected');
  // };

  postHandler = (event) => {
    axios
      .post("http://localhost:3001/notes", this.state.inputData)
      .then((res) => {
        console.log(res);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => console.logd(error));
  };

  
  
  

  render() {
    return (
      <>
      <Header />
      <main>
        <div className='enter'>
          <h2 className='title'>Fill in form</h2>
          <Form inputhandler={this.formHandler} submithandler={this.submitHandler} />
          <View {...this.state.inputData} />
          </div>
        <div className='show'>
          <h2 className='title'>Notes</h2>
          {this.state.data.map((note) => (
            <Notes {...note} id={note.id}/>
          ))}
        
        </div>
        <Popup {...this.state.inputData} cancelHandler={this.cancelHandler} postHandler={this.postHandler}/>
      </main>
      <Footer />
      </>
    );
  };
};

export default App;
