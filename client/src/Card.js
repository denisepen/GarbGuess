import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image}  height="75" width="75" alt={props.name}/>
      <p>For: {props.body_part} </p>
      <p>Color: {props.color} </p>
      <p>Weather Condition: {props.weather} </p>
      </div>
  )
}

export default Card
