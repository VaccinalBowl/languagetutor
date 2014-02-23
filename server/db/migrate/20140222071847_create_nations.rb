class CreateNations < ActiveRecord::Migration
  def change
    create_table :nations do |t|
      t.string :english
      t.string :chinese
      t.string :pinyin

      t.timestamps
    end
  end
end
