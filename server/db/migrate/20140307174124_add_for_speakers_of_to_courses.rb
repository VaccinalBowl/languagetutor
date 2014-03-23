class AddForSpeakersOfToCourses < ActiveRecord::Migration
  def change
      add_column :courses,:for_speakers_of, :text_field
      add_column :courses,:created_by, :text_field
  end
end
