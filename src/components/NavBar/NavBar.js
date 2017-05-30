import React, { Component } from 'react';
import data from '../../content/sections.json';

class NavBar extends Component {
  render() {
    return (
    <div className='nav-bar'>
      <div className='nav-bar-item'>
        <div className='nav-bar-circle'>
        </div>
        <h4>
          Warriorfy
        </h4>
      </div>
      <div className='nav-bar-item'>
        <div className='nav-bar-circle'>
        </div>
        <h4>
          Introduction
        </h4>
      </div>
      {data.map((item, i) => (
        <div className='nav-bar-item'>
          <div className='nav-bar-circle'>
          </div>
          <h4>
          {item.title}
          </h4>
        </div>
      ))}
      <div className='nav-bar-item'>
        <div className='nav-bar-circle'>
        </div>
        <h4>
          Angel List
        </h4>
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
