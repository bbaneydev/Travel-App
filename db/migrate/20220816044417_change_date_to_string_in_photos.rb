class ChangeDateToStringInPhotos < ActiveRecord::Migration[7.0]
  def change
    change_column :photos, :date, :string
  end
end
