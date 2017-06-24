import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'icon-closed'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState((prevState,props) => {
      if(prevState.position === 'icon-closed') {
        return { position: 'icon-open'}
      }
      return { position: 'icon-closed'}
    })
    this.props.togglePosition()
  }
  render() {
    return (
    <div className='menu-button-bar'>
      <div className={'icon ' + this.state.position} onClick={this.handleClick}>
        <div className='top-bar'/>
        <div className='middle-bar'/>
        <div className='bottom-bar'/>
      </div>
    </div>
  );
  }
}

export default MenuButton;
