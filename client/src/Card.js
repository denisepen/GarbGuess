import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2> {props.name}</h2>
      <p>{props.body_part} </p>
      <p>{props.color} </p>
      <p>{props.weather} </p>
      </div>
  )
}

export default Card
