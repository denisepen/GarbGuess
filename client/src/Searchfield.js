import React from 'react';

const Searchfield = (props) => {

  return (
    <form onSubmit={props.searchChange}>
      <input type="search" placeholder="rain, sun, mild" onChange={props.searchChange}/>
    </form>
  )
}

export default Searchfield
