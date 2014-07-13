class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :address
      t.integer :fsq_visitors
      t.integer :fsq_checkins
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
