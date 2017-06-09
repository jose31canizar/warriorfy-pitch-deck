import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import MenuBar from './components/MenuBar/MenuBar'
import MenuButton from './components/MenuButton/MenuButton'
import Sections from './Sections'
import Intro from './sections/Intro/Intro'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      position: 'closed'
    }
    this.handleClick = this.handleClick.bind(this)
    this.togglePosition = this.togglePosition.bind(this)
  }
  handleClick(i) {
    this.setState({
      selectedIndex: i
    })
  }
  togglePosition() {
    this.setState((prevState,props) => {
      if(prevState.position === 'closed') {
        return { position: 'open'}
      }
      return { position: 'closed'}
    })
  }
  render() {
    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        <div className={'wrapper ' + this.state.position}>
          <NavBar handleClick={this.handleClick}/>
          <MenuButton togglePosition={this.togglePosition}/>
          <Intro/>
          <Sections/>
        </div>
      </div>
    );
  }
}

export default App;
