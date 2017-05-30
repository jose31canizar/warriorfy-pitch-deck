import React, { Component } from 'react';
import data from './content/sections.json';
import Section from './Section';

class Sections extends Component {
  render() {
    return (
    <div>
      {data.map((block, i) => (
        <Section section={block.title}>
          {block.title}
        </Section>
      ))}
    </div>
  );
  }
}

export default Sections;
