import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="container container-fluid">
          body
        </div>
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
