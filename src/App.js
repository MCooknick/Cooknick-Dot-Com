import React, { Component } from 'react';

import './App.css';
import Home from './containers/home'
import PlusItView from './components/plusitView'
import PlusItInfo from './components/plusitInfo'
import AccutypeView from './components/accutypeView'
import AccutypeInfo from './components/accutypeInfo'
import ThickitView from './components/thickitView'
import ThickitInfo from './components/thickitInfo'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      active:'HOME'
    }

  }

  changeView = (selection) =>{
    this.setState({
      active: selection
    })
  }

  render() {
    return (
      <div className="App">
        <Home activeview={this.state.active} />
        
        <PlusItView onSelection={() => this.changeView('PLUSIT')} activeview={this.state.active} />
        <PlusItInfo onSelection={() => this.changeView('HOME')} activeview={this.state.active} />

        <AccutypeView onSelection={() => this.changeView('ACCUTYPE')} activeview={this.state.active} />
        <AccutypeInfo onSelection={() => this.changeView('HOME')} activeview={this.state.active} />

        <ThickitView onSelection={() => this.changeView('THICKIT')} activeview={this.state.active} />
        <ThickitInfo onSelection={() => this.changeView('HOME')} activeview={this.state.active} />
      </div>
    );
  }
}

export default App;
