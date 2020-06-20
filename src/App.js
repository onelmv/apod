import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header.js'
import SearchField from './components/SearchField.js'
import Body from './components/body.js';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      date: '',
      apod: null
    }
  }
 
  /* ////////////////////////////////// */

  componentDidMount(){
    const nasa_key= 'DkNMzkFMlHAPPxLOvNGqeAnCkAyrmOtBIjhg1Rgs';
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`)
        .then(response=> {
          return response.json()
        })
        .then((i)=>{
          this.setState({apod:i})
        })
    
    
        console.log(fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`)
        .then(response=> {
          return response.json()
        })
        .then((i)=>{
          this.setState({apod:i})
    
    }))
  }




  /* ////////////////////////////////// */
  /* //* catch every time search field change */
  onDateFieldChange =(event)=>{
    this.setState({ year: event.target.value })
    
    /* //todo const filterByYear  */


    console.log(this.state.date)

  }
 

  /* ////////////////////////////////// */
  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField dateChange={this.onDateFieldChange}/>
        <Body date={this.state}/>
      </div>
    );
  }

}

export default App;
