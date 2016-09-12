class AssignmentSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :account
  belongs_to :role
end
