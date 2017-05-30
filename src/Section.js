import React, { Component } from 'react';
import Label from './components/Label';

import Mission from './sections/Mission';
import Opportunity from './sections/Opportunity';
import Value from './sections/Value';
import Traction from './sections/Traction';
import BusinessModel from './sections/BusinessModel';
import Adoption from './sections/Adoption';
import Team from './sections/Team';
import Investment from './sections/Investment';


class Section extends Component {
  render() {
    var section;
    if (this.props.section == 'Mission') {
      section = <Mission />;
    } else if (this.props.section == 'Opportunity') {
      section = <Opportunity />;
    } else if (this.props.section == 'Value') {
      section = <Value />
    } else if (this.props.section == 'Traction') {
      section = <Traction />
    } else if (this.props.section == 'Business Model') {
      section = <BusinessModel />
    } else if (this.props.section == 'Adoption') {
      section = <Adoption />
    } else if (this.props.section == 'Team') {
      section = <Team />
    } else if (this.props.section == 'Investment') {
      section = <Investment />
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
