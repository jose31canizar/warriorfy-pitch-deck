import React, { Component } from 'react';
import Label from './components/Label';

import Mission from './sections/Mission';
import Opportunity from './sections/Opportunity';
import Value from './sections/Value';
import Traction from './sections/Traction';


class Section extends Component {
  render() {
    var section;
    if (this.props.section == 'Mission') {
      section = <Mission />;
    } else if (this.props.section == 'Opportunity') {
      section = <Opportunity />;
    } else if (this.props.section == 'Value') {
      section = <Value />
    }else if (this.props.section == 'Traction') {
      section = <Traction />
    }
    return (
    <div className='section'>
      <Label>
        {this.props.children}
      </Label>
      {section}
    </div>
  );
  }
}

export default Section;
