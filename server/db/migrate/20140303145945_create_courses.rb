class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :language

      t.timestamps
     end
     
     create_table :courses_users do |t|
     		  t.belongs_to :user
		  t.belongs_to :course
     end 

    
  end
end
