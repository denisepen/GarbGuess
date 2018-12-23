# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
1.times do |clothes|
  Clothing.create!(
    weather_category: "cloud",
    weather_min: 0,
    weather_max: 25,
    name: "jeans",
    body_cat: "bottom",
    color: 'black',
    event: "casual",
    image: "https://lsco.scene7.com/is/image/lsco/Levis/clothing/196260000-front-pdp.jpg?$grid_desktop_bottoms$"

  )
end

  1.times do |clothes|
    Clothing.create!(
      weather_category: "rain",
      weather_min: 20,
      weather_max: 25,
      name: "boots",
      body_cat: "feet",
      color: 'black',
      event: "casual",
      image: "https://media03.toms.com/static/www/images/Womens-Shoes/2018/FH18/10012467-BlackLeatherWomensEsme-P-1450x1015.jpg"

    )
  end

    1.times do |clothes|
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

    1.times do |clothes|
      Clothing.create!(
        weather_category: "rain",
        weather_min: 0,
        weather_max: 25,
        name: "Coat",
        body_cat: "top",
        color: "blue",
        event: "work",
        image: "https://www.gap.com/webcontent/0013/634/191/cn13634191.jpg"
      )
    end

    1.times do |clothes|
      Clothing.create!(
        weather_category: "snow",
        weather_min: 0,
        weather_max: 25,
        name: "Coat",
        body_cat: "top",
        color: "blue",
        event: "work",
        image: 'https://images.unsplash.com/photo-1484021377774-82f0a0673843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


      )
    end
