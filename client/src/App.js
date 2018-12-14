import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchfield from './Searchfield';
// import Card from './Card'
import CardList from './CardList';

class App extends Component {



  constructor(props) {
      super(props);

      this.state = {
        data: [],
        weather: ''
      };
    }

    componentDidMount() {
      fetch('/clothings')
        .then(response => response.json())
        .then(clothes => this.setState({ data: clothes }));

        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=725e07c224d8f9013d5380b8c4954377')
        .then(response => response.json())
        .then(weather => console.log(weather))
    }

    handleInput = (e) => {
    let input = e.target.value
    // console.log(input)
      this.setState({ weather: input})
    }

  render() {

      return (
        <div>
        <div className="top">
          <h1>Please Choose A Type of Weather </h1>
          <Searchfield searchChange={this.handleInput}/>
        </div>

          <CardList items={this.state.data} weather={this.state.weather}/>
        </div>
      )


  }
}

export default App;
