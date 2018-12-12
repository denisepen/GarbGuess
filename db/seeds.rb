# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do |clothes|
  Clothing.create!(
    weather_category: "mild",
    name: "jeans",
    body_cat: "bottom",
    color: 'blue',
    event: "casual"

  )
end

  2.times do |clothes|
    Clothing.create!(
      weather_category: "rain",
      name: "boots",
      body_cat: "feet",
      color: 'black',
      event: "casual"

    )
  end

    5.times do |clothes|
      Clothing.create!(
        weather_category: "mild",
        name: "dress",
        body_cat: "top",

        event: "casual"

      )
    end
