import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
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
    }

    handleInput = (e) => {
    let input = e.target.value
    console.log(input)
      this.setState({ weather: input})
    }

  render() {

      return (
        <div>
          <h1>Please Choose A Type of Weather </h1>
          <Searchfield searchChange={this.handleInput}/>

          <CardList items={this.state.data} weather={this.state.weather}/>
        </div>
      )


  }
}

export default App;
