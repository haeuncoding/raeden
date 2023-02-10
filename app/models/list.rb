# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  desc       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord

  has_and_belongs_to_many :books

  

end
