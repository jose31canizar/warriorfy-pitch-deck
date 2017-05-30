import React, { Component } from 'react';
import data from '../content/traction';

class Traction extends Component {
  render() {
    return (
    <div className="container">
        <div className='header'>
          <h2>The Journey Until Now...Boostrapped MoM Platform Growth</h2>
        </div>
        <div className='traction-image-container'>
          <img className='traction-image' src={require('../assets/img/05-Market-Validation-Growth.png')} />
        </div>
          <div className='text-block-grid'>
            <div className='text-block-row'>
              {data.map((block,i) => (
                <div className='text-block'>
                  <h6>{block.title}</h6>
                  <div className='text-block-description'>
                    <div className='roles'>
                      {block.list.map((item,i) => (
                        <div className='role'>
                          <p className='role-title'>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
    </div>
  );
  }
}

export default Traction;
