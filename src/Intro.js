import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
    <div className= 'Introduction' id='Introduction'>
      <img className='intro-image' src={require('./assets/img/01-header-v3.jpg')} />
    </div>
  );
  }
}

export default Intro;
