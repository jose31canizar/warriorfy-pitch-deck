
import React, { Component } from 'react';
import TeamData from '../../content/team';
import Label from '../../components/Label/Label';

class Team extends Component {
  render() {
    const topRow = TeamData.slice(0,4);
    const middleRow = TeamData.slice(4,8);
    const bottomRow = TeamData.slice(8,12);
    console.log(topRow);
    console.log(middleRow);
    return (
    <div className="Team" id="Team">
      <div className='section-header'>
          <h2>We build things people need and love to use.</h2>
        </div>

        <div className='team-members-container'>
          <div className='team-members'>
            <div className='team-members-row'>
              {topRow.map((member, i) => (
                <div className='team-member'>
                  <div className='profile-pic-container'>
                    <img src={require('../../assets/img/' + member.image + '.png')} className='profile-pic'/>
                  </div>
                  <div className='team-member-text'>
                  <div className='member-name'>
                      <h6>
                        {member.name}
                      </h6>
                  </div>
                      <p>
                        {member.job_title}
                      </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='advisors-label-container'>
                <Label label='Advisors'>Advisors</Label>
            </div>
            <div className={'team-members-row'}>
              {middleRow.map((member, i) => (
                <div className={'team-member'}>
                  <div className={'profile-pic-container'}>
                    <img src={require('../../assets/img/' + member.image + '.png')} className={'profile-pic'}/>
                  </div>
                  <div className={'team-member-text'}>
                  <div className='member-name'>
                      <h6>
                        {member.name}
                      </h6>
                  </div>
                      <p>
                        {member.job_title}
                      </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='team-members-row'>
              {bottomRow.map((member, i) => (
                <div className='team-member'>
                  <div className='profile-pic-container'>
                    <img src={require('../../assets/img/' + member.image + '.png')} className='profile-pic'/>
                  </div>
                  <div className='team-member-text'>
                  <div className='member-name'>
                      <h6>
                        {member.name}
                      </h6>
                  </div>
                      <p>
                        {member.job_title}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
  }
}

export default Team;
