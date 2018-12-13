import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h2> {props.item.name}</h2>
      <p>{props.color} </p>
      </div>
  )
}

export default Card
