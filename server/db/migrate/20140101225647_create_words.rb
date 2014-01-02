class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :lexical_form

      t.timestamps
    end
  end
end
