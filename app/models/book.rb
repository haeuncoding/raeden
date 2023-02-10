# == Schema Information
#
# Table name: books
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author     :string           not null
#  isbn       :string           not null
#  genre      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Book < ApplicationRecord
  validates :isbn,
    uniqueness: true
  validates :title,
    presence: true
  validates :author, 
    presence: true,
    uniqueness: true
  validates :genre,
    presence: true
  
  has_and_belongs_to_many :lists

end
