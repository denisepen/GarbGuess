class CreateClothings < ActiveRecord::Migration[5.2]
  def change
    create_table :clothings do |t|
      t.string :weather_category
      t.string :body_cat
      t.string :color
      t.string :event
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
