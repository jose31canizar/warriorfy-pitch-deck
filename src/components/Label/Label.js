import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
    <div className='label'>
      <div className='label-line'>
      </div>
      <div className='label-box'>
        <h3>
          {this.props.children}
        </h3>
      </div>
    </div>
  );
  }
}

export default Label;
