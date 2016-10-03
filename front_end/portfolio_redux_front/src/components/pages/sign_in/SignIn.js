import React from 'react';
import { connect } from 'react-redux';
import { receiveSignIn } from '../../../actions/session';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
  componentWillMount() {
    const { session } = this.props;

    if (session.isAuthenticated) {
      location.replace('/');
    }
  }

  render() {
    const { signIn } = this.props;

    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h3 className="text-center">Sign In to Continue</h3>
          <SignInForm signIn={signIn}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

export default connect(mapStateToProps, { signIn: receiveSignIn })(SignIn);
