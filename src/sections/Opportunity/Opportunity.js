import React, { Component } from 'react';
import data from '../../content/opportunity';
import Label from '../../components/Label/Label';

class Opportunity extends Component {
  render() {
    return (
    <div className='opportunity'>
      <div className='section-header'>
        <h1>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h1>
      </div>
      <Label>
        Problems
      </Label>
      {data.map((block, i) => (
        <div className='block'>
          <h2>{block.problem}</h2>
          <p>{block.problemDescription}</p>
        </div>
      ))}
      <Label>
        Solutions
      </Label>
      {data.map((block, i) => (
        <div className='block'>
          <h2>{block.solution}</h2>
          <p>{block.solutionDescription}</p>
        </div>
      ))}
    </div>
  );
  }
}

export default Opportunity;