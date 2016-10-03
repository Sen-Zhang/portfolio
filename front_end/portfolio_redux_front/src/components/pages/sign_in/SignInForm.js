import React from 'react';
import Auth from '../../../api/AuthApi';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { invalid: false };
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    Auth.signIn({
      email: this.email.value.trim(),
      password: this.pwd.value.trim()
    }).then((res) => {
      if (res && res.auth_token) {
        this.props.signIn(res.auth_token, res.user);
      } else {
        this.setState({ invalid: true });
      }
    }, () => {
      this.setState({ invalid: true });
    });
  }

  renderError() {
    if (this.state.invalid) {
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
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="foo@bar.com"
              ref={input => {
                this.email = input;
              }}/>
          </div>
          <div className="form-group">
            <label className="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="******"
              ref={input => {
                this.pwd = input;
              }}/>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
