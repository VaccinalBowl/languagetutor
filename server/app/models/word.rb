class Word < ActiveRecord::Base
  validates :lexical_form, presence: true
end
