import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import SearchField from './components/SearchField.js'
import Body from './components/body.js';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      day:'d',
      month:'m',
      year:'y'
    }
  }
  



  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField />
        <Body date={[this.state.day, this.state.month, this.state.year]} d={this.state}/>
      </div>
    );
  }

}

export default App;
