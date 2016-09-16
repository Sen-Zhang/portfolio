class Account < ApplicationRecord
  has_many :assignments
  has_many :users, through: :assignments
  has_many :roles, through: :assignments
  has_many :initiatives

  validates :name, presence: true, uniqueness: true
  validates :subdomain, presence: true, uniqueness: true
end