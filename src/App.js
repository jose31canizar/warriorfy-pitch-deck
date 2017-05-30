import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Sections from './Sections';
import Intro from './sections/Intro/Intro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1
    }
  }
  handleClick(i) {
    this.setState({
      selectedIndex: i
    })
  }
  render() {
    return (
      <div>
      <div className='wrapper'>
        <NavBar handleClick={this.handleClick}/>
        <Intro/>
        <Sections/>
      </div>
      </div>
    );
  }
}

export default App;
