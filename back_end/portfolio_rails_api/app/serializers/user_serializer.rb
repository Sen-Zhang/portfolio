class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name

  has_many :assignments
  has_many :accounts
  has_many :roles
end
