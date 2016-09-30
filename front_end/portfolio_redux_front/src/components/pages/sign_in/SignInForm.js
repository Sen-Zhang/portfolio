import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', pwd: '' };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePwd(e) {
    this.setState({ pwd: e.target.value });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    this.props.signIn({
      email: this.state.email,
      password: this.state.pwd
    });
  }

  renderError() {
    if (this.props.invalid) {
      return (
        <div className="alert alert-danger">
          Invalid email or password
        </div>
      );
    }

    return false;
  }

  render() {
    return (
      <div>
        {this.renderError()}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="foo@bar.com"
              value={this.state.email}
              onChange={this.handleChangeEmail}/>
          </div>
          <div className="form-group">
            <label className="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="******"
              value={this.state.pwd}
              onChange={this.handleChangePwd}/>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
