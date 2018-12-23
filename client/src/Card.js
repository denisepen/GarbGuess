import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image}  height="110" width="95" alt={props.name}/>
      <p> {/*props.body_part*/} </p>
      <p>Color: {props.color} </p>
      <p>Weather Condition: {props.weather} </p>
      </div>
  )
}

export default Card
