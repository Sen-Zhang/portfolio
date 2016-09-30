import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/SignOut';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  componentWillMount() {
    const { session } = this.props;

    if (!session.isAuthenticated &&
      location.pathname !== '/login') {
      location.replace('login');
    }
  }

  render() {
    const { dispatch, session } = this.props;

    return (
      <div>
        <Header session={session} signOut={() => dispatch(signOut())}/>
        <div className="container container-fluid">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.session;
}

export default connect(mapStateToProps)(App);
