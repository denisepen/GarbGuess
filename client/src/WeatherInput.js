import React from 'react';


const WeatherInput = (props)  => {
  return (
    <div>
      <form onSubmit={props.submit}>
       <input
         type="text"
         placeholder="Enter Zip Code"

          onChange={props.handleChange}/>
      </form>
    </div>
  )
}



export default WeatherInput;
// onKeyPress={props.handleChange}

// onSubmit={props.weatherChange}
// <form onSubmit={props.handleSubmit}>
//  <input type="search" placeholder="Enter Zip Code"  onChange={props.handleChange}/>
//  <input type="submit" value="Submit" />
// </form>
