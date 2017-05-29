import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Sections from './Sections';

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
        <NavBar handleClick={this.handleClick}/>
        <Sections/>
      </div>
    );
  }
}

export default App;
