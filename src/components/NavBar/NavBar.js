import React, { Component } from 'react';
import SmoothScroll from '../SmoothScroll';
import data from '../../content/sections.json';

class NavBar extends Component {
  render() {

    return (
    <div className='nav-bar'>
        <a href='http://warriorfy.com' target='_blank'>
          <div className='nav-bar-item'>
            <div className='nav-bar-circle logo'>
            </div>
            <h4>
              Warriorfy
            </h4>
          </div>
        </a>

      {data.map((item, i) => (
        <SmoothScroll section={item.title} className={item.title}>
          <div className='nav-bar-item'>
            <div className={'nav-bar-circle normal ' + (this.props.selectedIndex === i ? 'selected' : '')}>
            </div>
              <h4>
                {item.title}
              </h4>
          </div>
        </SmoothScroll>
      ))}

      <a href='http://warriorfy.com' target='_blank'>
        <div className='nav-bar-item'>
          <div className='nav-bar-circle logo-angel-list'>
          </div>
          <h4>
            Angel List
          </h4>
        </div>
      </a>

      <div className='nav-bar-line-container'>
        <div className='nav-bar-line'>
        </div>
      </div>
    </div>
  );
  }
}

export default NavBar;
