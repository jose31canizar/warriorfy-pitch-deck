import React, { Component } from 'react';
import Label from './components/Label';

class Intro extends Component {
  render() {
    return (
    <div className='intro'>
      <img className='intro-image' src={require('./assets/img/01-header-v3.jpg')} />
    </div>
  );
  }
}

export default Intro;
