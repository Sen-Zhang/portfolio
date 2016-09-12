class Role < ApplicationRecord
  has_many :assignments
  has_many :users, through: :assignments
  has_many :accounts, through: :assignments

  validates :name, presence: true, uniqueness: true
  validates :title, presence: true, uniqueness: true

  ROLES = %w(admin user).freeze

  def self.set_up
    ROLES.each { |r| Role.create(name: r, title: r.capitalize) }
  end

  ROLES.each do |role|
    define_singleton_method(role) { Role.find_by(name: role) }

    define_method("#{role}?") { name == role }
  end
end