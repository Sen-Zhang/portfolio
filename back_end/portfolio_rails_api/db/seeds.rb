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
end