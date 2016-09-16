class Initiative < ApplicationRecord
  belongs_to :account

  validates :title, presence: true, uniqueness: {scope: :account_id}
  validates :description, length: {maximum: 500}
  validates :time_period, presence: true
  validates :population, presence: true
  validates :employee_num, presence: true, numericality: {greater_than_or_equal_to: 0}
  validates :countries, presence: true
  validates :language, presence: true
  validates :account_id, presence: true
end