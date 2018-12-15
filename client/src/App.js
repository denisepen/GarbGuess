import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchfield from './Searchfield';
// import Card from './Card'
import WeatherInput from './WeatherInput';
import CardList from './CardList';

class App extends Component {



  constructor(props) {
      super(props);

      this.state = {
        data: [],
        weather: '',
        zipCode: null,
      };
    }

    componentDidMount() {
      fetch('/clothings')
        .then(response => response.json())
        .then(clothes => this.setState({ data: clothes }));
    }

    handleInput = (e) => {

      this.setState({weather: e.target.value})

    }

   //  handleInput = (e) => {
   //    if (e.key === 'Enter') {
   //        // e.preventDefault();
   //  let input = e.target.value;
   //
   //  console.log("input zip", input)
   //    this.setState({ zipCode: input })
   //    console.log("state zip", this.state);
   //    // e.preventDefault();
   // fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip}&&APPID=725e07c224d8f9013d5380b8c4954377`)
   //      .then(response => response.json())
   //      .then(weather => this.setState(weather: weather))
   //      // console.log(weather)
   //  }
  // }




  render() {

      return (
        <div>
        <div className="top">
          <h1>Please Enter The Weather COndition </h1>
          <Searchfield searchChange={this.handleInput}/>

        </div>

          <CardList items={this.state.data} weather={this.state.weather}/>
        </div>
      )


  }
}

export default App;

  // <WeatherInput handleChange={this.handleInput} />

  // <WeatherInput handleSubmit={this.weatherChange}  handleChange={this.handleChange}/>

  // <Searchfield searchChange={this.handleInput}/>

  // handleInput = (e) => {
  //  let input = e.target.value
  //  // console.log(input)
  //    this.setState({ weather: input})
  //  }

  // weatherChange={this.weatherChange}
