import React from 'react';

class Header extends React.Component {
  renderLinks() {
    const { session, signOut } = this.props;

    if (session.isAuthenticated) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown">
              Hi {session.user}! <span className="caret"/>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#" onClick={signOut}>Logout</a></li>
            </ul>
          </li>
        </ul>
      );
    }

    return false;
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar_collapse">
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a href="/" className="navbar-brand">GuideSpark</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar_collapse">
            {this.renderLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
