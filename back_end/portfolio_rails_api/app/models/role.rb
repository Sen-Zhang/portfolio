class Role < ApplicationRecord
  has_many :assignments
  has_many :users, through: :assignments
  has_many :accounts, through: :assignments

  validate :name, presence: true
  validate :title, presence: true
end