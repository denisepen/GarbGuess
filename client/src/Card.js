import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2> {props.name}</h2>
      <img src={props.image}  height="75" width="75"/>
      <p>{props.body_part} </p>
      <p>{props.color} </p>
      <p>{props.weather} </p>
      </div>
  )
}

export default Card
