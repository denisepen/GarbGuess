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
    return  <Card name={item.name} body_part={item.body_cat} color={item.color} weather={item.weather_category} />
   })


   if (!props.weather){
     return (
       <div>
        {allClothingList}
        </div>
     )
   } else {
     return (
       <div>
        {showList}
      </div>
     )
   }

}

export default CardList;
