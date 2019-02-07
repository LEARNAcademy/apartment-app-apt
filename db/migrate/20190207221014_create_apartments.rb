class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :name
      t.string :street_1
      t.string :street_2
      t.string :city
      t.string :state
      t.string :country
      t.numeric :postal_code
      t.integer :user_id

      t.timestamps
    end
  end
end
