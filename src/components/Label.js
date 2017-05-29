import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
    <div className='label'>
      <div className='label-line'>
      </div>
      <div className='label-box'>
        {this.props.children}
      </div>
    </div>
  );
  }
}

export default Label;
