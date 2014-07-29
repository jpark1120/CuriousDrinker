class AddMalesToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :males, :integer
  end
end
