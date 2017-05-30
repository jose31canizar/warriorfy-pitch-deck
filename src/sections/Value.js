import React, { Component } from 'react';

class Value extends Component {
  render() {
    return (
    <div className='value'>
      <div className='section-header'>
        <h1>Our value proposition has been verified. In the process, we've found a blue ocean opportunity, uncharted waters at the intersection of four growing markets.</h1>
      </div>
      <div className='section-subtitle'>

        <h3>We've reached 750K people who struggle with their relationship to food and body with zero ad spend.</h3>
      </div>
      <div className = 'value-image-container'>
            <img className={'value-image'} src={require('../assets/img/05-Market-Competitive-Landscape.png')}/>
      </div>
      <div className='section-footer'>
          <h2>
          Warriorfy is the first to combine educational audio content, self-tracking tools, and 1:1 support into one beautifully designed and easy-to-use platform.
          </h2>
      </div>
    </div>
  );
  }
}

export default Value;
