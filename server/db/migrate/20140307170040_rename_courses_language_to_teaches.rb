class RenameCoursesLanguageToTeaches < ActiveRecord::Migration
  def change
    rename_column :courses, :language ,:teaches 
    
  end
end
