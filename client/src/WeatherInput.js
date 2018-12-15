import React from 'react';


const WeatherInput = (props)  => {
  return (
    <div>

         <input type="search" placeholder="Enter Zip Code"  onKeyPress={props.handleChange} />

    </div>
  )
}



export default WeatherInput;

// onSubmit={props.weatherChange}
// <form onSubmit={props.handleSubmit}>
//  <input type="search" placeholder="Enter Zip Code"  onChange={props.handleChange}/>
//  <input type="submit" value="Submit" />
// </form>
