import React, { Component } from 'react';
import data from '../content/sections.json';

class NavBar extends Component {
  render() {
    return (
    <div className='nav-bar'>
    {data.map((item, i) => (
      <div className='nav-bar-item'>
        {item.title}
      </div>
    ))}
    </div>
  );
  }
}

export default NavBar;
