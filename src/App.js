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
      apod: {}
    }
  }
  /* ////////////////////////////////// */

  componentDidMount(){
    
    this.fetchData(this.state.date);
   
  }

  fetchData(date){
    const nasa_key= 'DkNMzkFMlHAPPxLOvNGqeAnCkAyrmOtBIjhg1Rgs';
    

    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${nasa_key}`)
          .then(response=>response.json())
          .then(json=>this.setState({apod:json})
          )
          
    /* console.log(this.state.date,this.state.apod.date) */
  }

  /* ////////////////////////////////// */
  /* //* catch every time search field change */
  onDateFieldChange =(event)=>{
    this.setState({ date: event.target.value })
     
    console.log("event:",event.target.value,"|state: ",this.state.date) //!problems
    
    this.fetchData(this.state.date)
    
  }
 

  /* ////////////////////////////////// */
  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField dateChange={this.onDateFieldChange} date={this.state.date} />
        <Body date={this.state.date} apod={this.state.apod} t={this}/>
      </div>
    );
  }

}

export default App;
