import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchfield from './Searchfield';
// import Card from './Card'
import WeatherInput from './WeatherInput';
import WeatherDisplay from './WeatherDisplay'
import CardList from './CardList';
import Scroll from './Scroll'

class App extends Component {



  constructor(props) {
      super(props);

      this.state = {
        data: [],
        // city: '' ,
        zipCode: '',
        weather: []
      };
    }

    componentDidMount() {
      fetch('/clothings')
        .then(response => response.json())
        .then(clothes => this.setState({ data: clothes }));
        // .then(clothes => console.log(clothes));
    }



    handleInput = (e) => {
      if (e.which === 13) {
          // e.preventDefault();
    let input = e.target.value;

      this.setState({ zipCode: input })
      console.log("state zip ", this.state.zipCode);



      // e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode}&&APPID=725e07c224d8f9013d5380b8c4954377`)
        .then(response => response.json())
        // .then(weather =>  console.log(weather))
        .then(weather =>  this.setState({weather: weather}))
        // .then(weather => weatherObj = {...weather})
        console.log("this.state.weather: ", this.state)
    }

    // console.log("This.state.city: ", this.state);
  }




  render() {

      return (
        <div>
        <div className="top">
          <h1>Please Enter Your Zip Code </h1>
          <WeatherInput handleChange={this.handleInput} />
          <WeatherDisplay weather={this.state.weather} />




        </div>
          <Scroll>
            <CardList items={this.state.data} weather={this.state.weather}/>
          </Scroll>
        </div>
      )


  }
}

export default App;

// <WeatherDisplay cityName={this.state.weather.city}

// temp={this.state.weather.main.temp }
// rain={this.state.weather.list.weather[0].description}/>

// handleInput = (e) => {
//   this.setState({weather: e.target.value})
// }

// <Searchfield searchChange={this.handleInput}/>

  // <WeatherInput handleChange={this.handleInput} />

  // <WeatherInput handleSubmit={this.weatherChange}  handleChange={this.handleChange}/>

  // <Searchfield searchChange={this.handleInput}/>

  // handleInput = (e) => {
  //  let input = e.target.value
  //  // console.log(input)
  //    this.setState({ weather: input})
  //  }

  // weatherChange={this.weatherChange}
