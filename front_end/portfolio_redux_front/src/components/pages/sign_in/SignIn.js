import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../actions/SignIn';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
  render() {
    const { dispatch, session } = this.props;

    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h3 className="text-center">Sign In to Continue</h3>
          <SignInForm
            signIn={creds => dispatch(signIn(creds))}
            invalid={session.invalid}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.session;
}

export default connect(mapStateToProps)(SignIn);
