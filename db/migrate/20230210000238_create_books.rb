class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :isbn, null: false
      t.string :genre, null: false
      
      t.timestamps
    end

    create_table :lists do |t|
      t.string :title, null: false
      t.text :desc
      t.timestamps
    end

    create_join_table :books, :lists

    add_index :books, :isbn, unique: true
  end
end
