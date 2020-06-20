import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header.js'
import SearchField from './components/SearchField.js'
import Body from './components/body.js';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      year:'',
      month:'',
      day:''
    }
  }
  
  /* //* catch every time search field change */
  onYearFieldChange =(event)=>{
    this.setState({ year: event.target.value })
    
    /* //todo const filterByYear  */


    console.log(this.state.year)

  }
  onMonthFieldChange = (event)=>{
    this.setState({ month: event.target.value })
    
    console.log(this.state.month)

  }
  onDayFieldChange =(event)=>{
    this.setState({ day: event.target.value })

    console.log(this.state.day)

  }


  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField yearChange={this.onYearFieldChange} monthChange={this.onMonthFieldChange} dayChange={this.onDayFieldChange}/>
        <Body date={this.state}/> {/*// date={[this.state.day, this.state.month, this.state.year]}//! if you want use arrays insted of an object */} 
      </div>
    );
  }

}

export default App;
