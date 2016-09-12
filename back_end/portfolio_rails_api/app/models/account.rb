class Account < ApplicationRecord
  has_many :assignments
  has_many :users, through: :assignments
  has_many :roles, through: :assignments

  validates :name, presence: true
  validates :subdomain, presence: true
end