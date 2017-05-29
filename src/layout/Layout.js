import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      {this.props.children}
      <Footer/>
    </div>
  );
  }
}

export default Layout;
