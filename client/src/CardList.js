import React from 'react'
import Card from './Card'

const CardList = (props) => {

   let clothingList = props.items.filter(item =>  {

     if(props.weather.location){
       let weatherDescription = props.weather.description;

       let temp = (((props.weather.temp) -273.15)* (9/5) + 32).toFixed(1)

       let inRange = function(temp, item){
         return ((temp >= item.weather_min) && (temp <= item.weather_max))
       }

       return ((inRange(temp, item)) ||  weatherDescription.includes(item.weather_category) )

     }
     // return item.weather_category === props.weather;

   })

   let allClothingList = props.items.map((item, i) => {
     // console.log(props.items)
     return <Card name={item.name} body_part={item.body_cat} color={item.color} weather={item.weather_category}  image={item.image} key={i} />
   })

   let showList = clothingList.map((item, i) => {
    return  <Card name={item.name} body_part={item.body_cat} color={item.color} weather={item.weather_category}  image={item.image} key={i}/>
   })


   if (!props.weather.location){
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
