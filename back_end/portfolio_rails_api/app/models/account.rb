class Account < ApplicationRecord
  has_many :assignments
  has_many :users, through: :assignments
  has_many :roles, through: :assignments

  validate :name, presence: true
  validate :subdomain, presence: true
end