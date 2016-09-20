# New Architecture Experiment

## Documentation

### Ember + Rails API (5.0+)
#### Requirement
  - npm
  - bower
  - ruby 2.3.1
  - bundler
  - foreman
  - PostgreSQL
  
#### Setup
1. Start Foreman.

        % foreman start -f Procfile.ember

2. Verify that the app is up and running.

        % open http://admin.app.lvh.me:4200
#### sample account
You can sign in to the demo account with the following info.
<table>
  <thead>
    <tr>
      <th>Email</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>admin@gs.com</td>
      <td>admin</td>
    </tr>
  </tbody>
</table>

### Rails Full-stack
#### Requirement
  - bower
  - ruby 2.3.1
  - bundler
  - foreman
  - PostgreSQL
  
#### Setup
1. Start Foreman.

        % foreman start -f Procfile.rails

2. Verify that the app is up and running.

        % open http://foo.app.lvh.me:3000
#### sample account
You can sign in to the demo account with the following info.
<table>
  <thead>
    <tr>
      <th>Email</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fb@gs.com</td>
      <td>foo</td>
    </tr>
  </tbody>
</table>
