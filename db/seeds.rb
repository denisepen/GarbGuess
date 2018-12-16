# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
2.times do |clothes|
  Clothing.create!(
    weather_category: "cloud",
    weather_min: 0,
    weather_max: 85,
    name: "jeans",
    body_cat: "bottom",
    color: 'black',
    event: "casual",
    image: "https://lsco.scene7.com/is/image/lsco/Levis/clothing/196260000-front-pdp.jpg?$grid_desktop_bottoms$"

  )
end

  2.times do |clothes|
    Clothing.create!(
      weather_category: "rain",
      weather_min: 20,
      weather_max: 75,
      name: "boots",
      body_cat: "feet",
      color: 'black',
      event: "casual",
      image: "https://media03.toms.com/static/www/images/Womens-Shoes/2018/FH18/10012467-BlackLeatherWomensEsme-P-1450x1015.jpg"

    )
  end

    2.times do |clothes|
      Clothing.create!(
        weather_category: "clear sky",
        weather_min: 65,
        weather_max: 100,
        name: "dress",
        body_cat: "top",
        color: "yellow",
        event: "casual",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKkGSNGGOGRsGXJWiiBISNASPx3NJt24S9IiVF-7GBzy791Bafg"


      )
    end

    2.times do |clothes|
      Clothing.create!(
        weather_category: "rain",
        weather_min: 0,
        weather_max: 55,
        name: "Coat",
        body_cat: "top",
        color: "blue",
        event: "work",
        image: "https://www.gap.com/webcontent/0016/441/417/cn16441417.jpg"


      )
    end
