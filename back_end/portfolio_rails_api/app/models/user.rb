class User < ApplicationRecord
  has_secure_password

  has_many :assignments
  has_many :accounts, through: :assignments
  has_many :roles, through: :assignments

  validates :email, presence: true
end