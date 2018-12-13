import React from 'react';

const Searchfield = (props) => {

  return (
    <input type="search" placeholder="rain, sun, mild" onChange={props.searchChange}/> 
  )
}

export default Searchfield
