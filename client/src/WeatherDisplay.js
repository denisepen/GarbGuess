import React from 'react';

const WeatherDisplay = (props) => {
if (props.weather.location){
  return (
    <div>
       <h3>City Name: {props.weather.location} </h3>
       <h4>Weather Condition: {props.weather.description } </h4>
       <h4>Temperature: {(((props.weather.temp) -273.15)* (9/5) + 32).toFixed(1) } Deg F </h4>

    </div>
  )
} else {
  return (
    <div>
       <h3>City Name: </h3>

    </div>
  )
}

}

export default WeatherDisplay;

// <h3>City Name: {props.weather.city.name} </h3>
// <h4>Weather Condition: {props.weather.list[0].weather[0].description } </h4>
// <h4>Temperature: {(((props.weather.list[0].main.temp) -273.15)* (9/5) + 32).toFixed(1) } Deg F </h4>

// <WeatherDisplay city={this.state.zipCode.name}
//   temp={this.state.main.temp - 273.15}
//   rain={this.state.zipCode.list.weather[0].description}/>
