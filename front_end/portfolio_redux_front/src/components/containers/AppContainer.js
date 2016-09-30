import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../layouts/App';

class AppContainer extends Component {
  render() {
    const { actions } = this.props;
    return (
      <App actions={actions}>
        {this.props.children}
      </App>
    );
  }
}

AppContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
