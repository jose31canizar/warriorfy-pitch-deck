import React, { Component } from 'react';
import Label from './components/Label';

class Section extends Component {
  render() {
    return (
    <div className='section'>
      <Label>
        {this.props.children}
      </Label>
    </div>
  );
  }
}

export default Section;
