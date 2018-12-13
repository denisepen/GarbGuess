import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h2> {props.name}</h2>
      <p>{props.body_part} </p>
      <p>{props.color} </p>
      </div>
  )
}

export default Card