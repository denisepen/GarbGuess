import React from 'react'
import Card from './Card'

const CardList = (props) => {

   let clothingList = props.items.filter(item =>  {

     if(props.weather.list){
       let weatherDescription = props.weather.list[0].weather[0].description;

       let temp = (((props.weather.list[0].main.temp) -273.15)* (9/5) + 32).toFixed(1)

       let inRange = function(temp, item){
         return ((temp <= item.weather_max) && temp >= item.weather_min)
       }

       return (weatherDescription.includes(item.weather_category) && (inRange(temp, item)) )

     }
     // return item.weather_category === props.weather;

   })

   let allClothingList = props.items.map((item, i) => {
     // console.log(props.items)
     return <Card name={item.name} body_part={item.body_cat} color={item.color} key={i} />
   })

   let showList = clothingList.map((item, i) => {
    return  <Card name={item.name} body_part={item.body_cat} color={item.color} weather={item.weather_category}  image={item.image} key={i}/>
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
