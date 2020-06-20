import React, { Component, Fragment } from 'react';
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
  
  /* //* catch every time search field change */
  onDateFieldChange(event){
    console.log(event.target.value)
  }


  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField dateChange={this.onDateFieldChange}/>
        <Body date={this.state}/> {/*// date={[this.state.day, this.state.month, this.state.year]}//! if you want use arrays insted of an object */} 
      </div>
    );
  }

}

export default App;
