import React, {Component} from 'react';

class ContactBlock extends Component {
  render() {
    return (
      <div className='contact-block'>
        <h6>CONTACT</h6>
        <p>Email: jessica@warriorfy.com</p>
        <p>Phone: (858) 735-5965</p>
        <p>Location:</p>
        <ul>
        <li>Boulder, CO</li>
        <li>Boston, MA</li>
        </ul>
        <div className='logo-image'>
        <img src={require('../../assets/img/00-Logo.png')} />
        </div>
      </div>
    )
  }
};

export default ContactBlock;
