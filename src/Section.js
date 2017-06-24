import React, { Component } from 'react';
import Label from './components/Label/Label';

import Intro from './Intro';
import Mission from './sections/Mission/Mission';
import Opportunity from './sections/Opportunity/Opportunity';
import Value from './sections/Value/Value';
import Traction from './sections/Traction/Traction';
import BusinessModel from './sections/BusinessModel/BusinessModel';
import Adoption from './sections/Adoption/Adoption';
import Team from './sections/Team/Team';
import Investment from './sections/Investment/Investment';


class Section extends Component {
  render() {
    var section;
    if (this.props.section == 'Introduction') {
      section = <Intro />;
    } else if (this.props.section == 'Mission') {
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
      {this.props.section !== 'Introduction' ? <Label>{this.props.children}</Label> : null}
      {section}
    </div>
  );
  }
}

export default Section;
