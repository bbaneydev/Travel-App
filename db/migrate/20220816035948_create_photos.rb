class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.date :date
      t.string :who
      t.string :photo
      t.integer :album_id
      t.integer :user_id

      t.timestamps
    end
  end
end
