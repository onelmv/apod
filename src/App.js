import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import SearchField from './components/SearchField.js'
import Body from './components/body.js';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      date: new Date().toJSON().slice(0,10),
      apod: null
    }
  }
 

  
  /* ////////////////////////////////// */

  componentDidMount(){
    
    const nasa_key= 'DkNMzkFMlHAPPxLOvNGqeAnCkAyrmOtBIjhg1Rgs';
    console.log(nasa_key)
    /* https://api.nasa.gov/planetary/apod?api_key=DkNMzkFMlHAPPxLOvNGqeAnCkAyrmOtBIjhg1Rgs */
    fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&api_key=${nasa_key}`)
          .then(response=>response.json())
          .then(data=>this.setState({apod:data}))

     console.log(this.state.apod) 
  }

  


  /* ////////////////////////////////// */
  /* //* catch every time search field change */
  onDateFieldChange =(event)=>{
    this.setState({ date: event.target.value })
     
    console.log(`cambia en app`,this.state.date)
  }
 

  /* ////////////////////////////////// */
  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField dateChange={this.onDateFieldChange} date={this.state.date}/>
        <Body date={this.state.date}/>
      </div>
    );
  }

}

export default App;
