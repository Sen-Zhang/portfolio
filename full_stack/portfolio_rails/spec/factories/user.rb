FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "test_#{n}@gs.com" }
    sequence(:first_name) { |n| "first_#{n}" }
    sequence(:last_name) { |n| "last_#{n}" }
    password 'foobar'
    password_confirmation 'foobar'
  end
end