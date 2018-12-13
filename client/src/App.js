import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Searchfield from './Searchfield';
import Card from './Card'

class App extends Component {



  constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      fetch('/clothings')
        .then(response => response.json())
        .then(clothes => this.setState({ data: clothes }));
    }


  render() {
    return (
      <div>
        <h1>Hello </h1>
        <Card item={this.state.data}/>
      </div>  
    )
  }
}

export default App;
