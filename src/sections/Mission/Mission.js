import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
    <div className='mission'>
      <div className='section-header'>
        <h1>Provide the ultimate journey to health and healing.</h1>
      </div>
      <div className='mission-image-container'>
        <img className='mission-image' src={require('../../assets/img/01-Mission.jpg')} alt='Mission' />
      </div>
    </div>
  );
  }
}

export default Mission;
