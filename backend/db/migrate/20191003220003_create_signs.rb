class CreateSigns < ActiveRecord::Migration[6.0]
  def change
    create_table :signs do |t|
      t.string :name
      t.string :traits
      t.string :element
      t.string :gems
      t.string :description
      t.date :startDate
      t.date :endDate
      t.timestamps
    end
  end
end
