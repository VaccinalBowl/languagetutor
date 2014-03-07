class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :english
      t.string :chinese
      t.string :pinyin
      t.references :course
      t.timestamps
    end
  end
end
