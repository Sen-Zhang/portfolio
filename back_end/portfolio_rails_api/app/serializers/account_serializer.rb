class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :subdomain

  has_many :assignments
  has_many :users
  has_many :roles
end
