import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Searchfield from './Searchfield';
// import Card from './Card'
import WeatherInput from './WeatherInput';
import WeatherDisplay from './WeatherDisplay'
import CardList from './CardList';
import Scroll from './Scroll'

function Weather(location, temp, description) {
  this.location = location;
  this.temp = temp;
  this.description = description;
}

Weather.fromOpenWeatherMapResponse = function(openWeatherMapResponse) {
  const location = openWeatherMapResponse.city.name;
  const temperature = openWeatherMapResponse.list[0].main.temp;
  const description = openWeatherMapResponse.list[0].weather[0].description;
  return new Weather(location, temperature, description);
}

class App extends Component {



  constructor(props) {
      super(props);

      this.state = {
        data: [],
        zipCode: '',
        weather: {
          location: '',
          temp: null,
          description: ''
        }
      };
    }

    componentDidMount() {
      fetch('/clothings')
        .then(response => response.json())
        .then(clothes => this.setState({ data: clothes }));
        // .then(clothes => console.log(clothes));
    }



    handleInput = (e) => {
      e.preventDefault();
      let input = e.target.value;

      this.setState({ zipCode: input })
      console.log("state zip ", this.state.zipCode);
    }


handleSubmit = (e) => {
   e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode}&&APPID=725e07c224d8f9013d5380b8c4954377`)
        .then(response => response.json())
        // .then(weatherResponse =>  console.log(weatherResponse))
        .then(weatherResponse => {
          const weather = Weather.fromOpenWeatherMapResponse(weatherResponse);
          this.setState(
            { weather: { ...weather } },
            _ => console.log("this.state.weather: ", this.state)
          );
        })
        .catch(error => console.log(error))
  }
  
  render() {

      return (
        <div>
        <div className="top">
          <h1>Please Enter Your Zip Code </h1>
          <WeatherInput
            handleChange={this.handleInput}
            zip={this.state.zipCode}
            submit={this.handleSubmit}/>
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
