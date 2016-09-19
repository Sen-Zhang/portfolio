Account.destroy_all
User.destroy_all
Role.destroy_all
Assignment.destroy_all

admin_account = Account.create(name: 'admin', subdomain: 'admin')
Role.set_up

if Rails.env.development? || Rails.env.test?
  sample_account = Account.create(name: 'foo', subdomain: 'foo')

  admin_user = User.create(email:                 'admin@gs.com',
                           password:              'admin',
                           password_confirmation: 'admin',
                           first_name:            'Admin',
                           last_name:             'User')

  test_user = User.create(email:                 'fb@gs.com',
                          password:              'foo',
                          password_confirmation: 'foo',
                          first_name:            'Foo',
                          last_name:             'Bar')

  Assignment.create(account: admin_account, role: Role.admin, user: admin_user)
  Assignment.create(account: sample_account, role: Role.user, user: test_user)

  sample_account.initiatives.create(
    title:        'Open Enrollment',
    description:  'This is an initiative of account Foo',
    time_period:  'Ongoing',
    population:   'All',
    employee_num: 200,
    countries:    'USA',
    language:     'English',
    launch_date:  Date.today
  )

  sample_account.initiatives.create(
    title:        'Financial Wellness',
    description:  'This is an initiative of account Foo',
    time_period:  '2017',
    population:   'All',
    employee_num: 500,
    countries:    'USA,Canada',
    language:     'English',
    launch_date:  Date.yesterday
  )
end