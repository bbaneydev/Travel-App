class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :location
      t.date :start_date
      t.string :text
      t.date :end_date
      t.integer :user_id

      t.timestamps
    end
  end
end
