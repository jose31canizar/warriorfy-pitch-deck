import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
    <div className='label'>
      <div className='label-line'>
      </div>
      <div className='label-box'>
        <h2>
          {this.props.children}
        </h2>
      </div>
    </div>
  );
  }
}

export default Label;
