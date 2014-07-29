class AddFemalesToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :females, :integer
  end
end
