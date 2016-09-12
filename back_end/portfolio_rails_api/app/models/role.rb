class Role < ApplicationRecord
  has_many :assignments
  has_many :users, through: :assignments
  has_many :accounts, through: :assignments

  validates :name, presence: true
  validates :title, presence: true
end