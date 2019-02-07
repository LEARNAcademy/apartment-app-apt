class AddUsernameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
    add_column :users, :phone, :string
    add_column :users, :contact_hours, :string
  end
end
