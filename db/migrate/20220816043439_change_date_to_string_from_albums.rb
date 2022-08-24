class ChangeDateToStringFromAlbums < ActiveRecord::Migration[7.0]
  def change
    change_column :albums, :date, :string
  end
end
