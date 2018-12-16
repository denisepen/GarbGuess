import React from 'react'
import Card from './Card'

const CardList = (props) => {

   let clothingList = props.items.filter(item =>  {

     if(props.weather.list){
       let weatherDescription = props.weather.list[0].weather[0].description;

       return weatherDescription.includes(item.weather_category)

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
