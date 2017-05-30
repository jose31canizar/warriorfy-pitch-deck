import React, { Component } from 'react';
import data from '../content/sections.json';

class NavBar extends Component {
  render() {
    return (
    <div className='nav-bar'>
      <div className='nav-bar-item'>
        <div className='nav-bar-circle'>
        </div>
        <h3>
          Warriorfy
        </h3>
      </div>
      <div className='nav-bar-item'>
        <div className='nav-bar-circle'>
        </div>
        <h3>
          Introduction
        </h3>
      </div>
      {data.map((item, i) => (
        <div className='nav-bar-item'>
          <div className='nav-bar-circle'>
          </div>
          <h3>
          {item.title}
          </h3>
        </div>
      ))}
      <div className='nav-bar-item'>
        <div className='nav-bar-circle'>
        </div>
        <h3>
          Angel List
        </h3>
      </div>
      <div className='nav-bar-line-container'>
        <div className='nav-bar-line'>
        </div>
      </div>
    </div>
  );
  }
}

export default NavBar;
