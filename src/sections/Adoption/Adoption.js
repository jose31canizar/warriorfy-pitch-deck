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
          <h3>1.) Start with our existing subcommunity, Recovery Warriors</h3>
          <h3>2.) Expand reach through digital advertising</h3>
          <h3>3.) Strengthen brand through media exposure</h3>
        </div>
        <div className='adoption'>
            <div className='example'>
                <img src={require('../../assets/img/Adoption-IG.png')} className='product-image'/>
            </div>
            <div className='launch'>
              <h6>LAUNCH</h6>
              <p>• Direct email</p>
              <p>• Social media</p>
              <p>• Online magazine </p>
              <p>• Network outreach</p>
            <div className='scale'>
              <h6>SCALE</h6>
                <p>• Strong inbound sales funnel</p>
                <p>• Audio advertisements on health-focused podcasts</p>
                <p>• Affiliate marketing</p>
                <p>• Treatment center partnerships</p>
                <p>• PR</p>
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
