import React from 'react';

const WeatherDisplay = (props) => {
if (props.weather.city){
  return (
    <div>
       <h3>City Name: {props.weather.city.name} </h3>
       <h4>Precipitation: {props.weather.list[0].weather[0].description } </h4>
       <h4>Temperature: {((props.weather.list[0].main.temp) -273.15).toFixed(2) } Deg C </h4>

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

// <WeatherDisplay city={this.state.zipCode.name}
//   temp={this.state.main.temp - 273.15}
//   rain={this.state.zipCode.list.weather[0].description}/>
