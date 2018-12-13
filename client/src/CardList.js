import React from 'react'
import Card from './Card'

const CardList = (props) => {

   let clothingList = props.items.filter(item =>  {
     return item.weather_category === props.weather.toLowerCase();
   })

   let allClothingList = props.items.map(item => {
     console.log(props.items)
     return <Card name={item.name} body_part={item.body_cat} color={item.color} />
   })

   let showList = clothingList.map(item => {
    return  <Card name={item.name} body_part={item.body_cat} color={item.color} />
   })


   if (!props.weather){
     return (
       {allClothingList}
     )
   } else {
     return (
       {showList}
     )
   }

}

export default CardList;
