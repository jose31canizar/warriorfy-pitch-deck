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
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {


    const sections = [0,250,500,1250,2000,4500,6000,10000,11000,12000,14000,15000];

    if(window.scrollY > 500) {
      this.setState((prevState, props) => {
            return {
              stick : false
            }
          });
    } else {
      this.setState((prevState, props) => {
            return {
              stick : false
            }
          });
    }

    if(window.scrollY > sections[0] && window.scrollY < sections[1]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : -1
            }
          });
    }

    if(window.scrollY > sections[1] && window.scrollY < sections[2]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 0
            }
          });
    }

    if(window.scrollY > sections[2] && window.scrollY < sections[3]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 1
            }
          });
    }

    if(window.scrollY > sections[3] && window.scrollY < sections[4]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 2
            }
          });
    }

    if(window.scrollY > sections[4] && window.scrollY < sections[5]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 3
            }
          });
    }

    if(window.scrollY > sections[5] && window.scrollY < sections[6]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 4
            }
          });
    }

    if(window.scrollY > sections[6] && window.scrollY < sections[7]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 5
            }
          });
    }

    if(window.scrollY > sections[7] && window.scrollY < sections[8]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 6
            }
          });
    }

    if(window.scrollY > sections[8] && window.scrollY < sections[9]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 7
            }
          });
    }

    if(window.scrollY > sections[9] && window.scrollY < sections[10]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 8
            }
          });
    }

    if(window.scrollY > sections[10] && window.scrollY < sections[11]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 8
            }
          });
    }
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
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div>
        <div className={'wrapper ' + this.state.position}>
          <NavBar handleClick={this.handleClick} selectedIndex={this.state.selectedIndex}/>
          <MenuButton togglePosition={this.togglePosition}/>
          <Sections/>
        </div>
        <MenuBar handleClick={this.handleClick} togglePosition={this.togglePosition}/>
      </div>
    );
  }
}

export default App;
