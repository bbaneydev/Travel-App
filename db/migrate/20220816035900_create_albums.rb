class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :location
      t.date :date
      t.string :photo
      t.integer :user_id

      t.timestamps
    end
  end
end
