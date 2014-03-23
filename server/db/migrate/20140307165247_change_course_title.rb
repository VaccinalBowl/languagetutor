class ChangeCourseTitle < ActiveRecord::Migration
  def change
    rename_column :courses, :title, :name
  
  end
end
