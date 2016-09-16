class InitiativeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :time_period, :population,
             :employee_num, :countries, :language, :launch_date

  belongs_to :account
end
