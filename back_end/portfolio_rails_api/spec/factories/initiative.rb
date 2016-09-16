FactoryGirl.define do
  factory :initiative do
    sequence(:title) { |n| "Initiative #{n}" }
    sequence(:description) { |n| "This is Initiative #{n}." }
    time_period 'Ongoing'
    population 'All'
    employee_num 100
    countries 'USA'
    language 'English'
  end
end