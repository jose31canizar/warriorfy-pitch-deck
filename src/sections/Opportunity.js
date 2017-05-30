import React, { Component } from 'react';
import data from '../content/opportunity';
import Label from '../components/Label';

class Opportunity extends Component {
  render() {
    return (
    <div className='opportunity'>
      <div className='section-header'>
        <h2>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h2>
      </div>
      <Label>
        Problems
      </Label>
      {data.map((block, i) => (
        <div className='block'>
          <h3><strong>{block.problem}</strong></h3>
          <p>{block.problemDescription}</p>
        </div>
      ))}
      <Label>
        Solutions
      </Label>
      {data.map((block, i) => (
        <div className='block'>
          <h3><strong>{block.solution}</strong></h3>
          <p>{block.solutionDescription}</p>
        </div>
      ))}
    </div>
  );
  }
}

export default Opportunity;
