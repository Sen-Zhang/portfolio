import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email || '',
      pwd: this.props.pwd || ''
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  handleChangePwd(e) {
    this.setState({pwd: e.target.value});
  }

  handleSubmit() {
    // let params = {
    //   session: {
    //     email: this.state.email,
    //     password: this.state.pwd
    //   }
    // };
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="foo@bar.com"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </div>
        <div className="form-group">
          <label className="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="******"
            value={this.state.pwd}
            onChange={this.handleChangePwd}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h3 className="text-center">Sign In to Continue</h3>
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default SignIn;
