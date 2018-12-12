import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  componentWillmount(){
    return weather =  fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=725e07c224d8f9013d5380b8c4954377')
      .then(response => response.json())
      .then(weather => weather)
  }

  render() {
    return (<h1>Hello </h1>)
  }
}

export default App;
