import React, { Component } from 'react';

class Adoption extends Component {
  render() {
    return (
    <div className='Adoption' id='Adoption'>
      <div className='section-header'>
        <h1>Grassroots go-to-market strategy.</h1>
      </div>
      <div className="container">
        <div className='subtitle-text'>
          <h3>• Start with our existing subcommunity, Recovery Warriors</h3>
          <h3>• Expand reach through digital advertising</h3>
          <h3>• Strengthen brand through media exposure</h3>
        </div>
        <div className='adoption'>
            <div className='example'>
                <img src={require('../../assets/img/Adoption-IG.png')} className='product-image'/>
            </div>
            <div className='launch'>
              <h6>LAUNCH</h6>
              <li>• Direct email</li>
              <li>• Social media</li>
              <li>• Online magazine </li>
              <li>• Network outreach</li>
            <div className='scale'>
              <h6>SCALE</h6>
                <li>• Strong inbound sales funnel</li>
                <li>• Audio advertisements on health-focused podcasts</li>
                <li>• Affiliate marketing</li>
                <li>• Treatment center partnerships</li>
                <li>• PR</li>
                </div>
                </div>
          </div>
          <div className='footer'>
            <div className='footer-text'>
            </div>
          </div>
      </div>
    </div>
  );
  }
}

export default Adoption;
