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
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', this.state.date, prevState.date);
    if (this.state.date !== prevState.date)
      this.fetchData(this.state.date);   
  }

  /* ////////////////////////////////// */
  onDateFieldChange =(event)=>{
    this.setState({ date: event.target.value })
     
    console.log("event:",event.target.value,"|state: ",this.state.date)     
  }
 

  /* ////////////////////////////////// */
  render (){
    return (
      <div className="tc f2 lh-copy georgia bg-light-blue ">
        <Header />
        <SearchField dateChange={this.onDateFieldChange} date={this.state.date} />
        <Body date={this.state.date} apod={this.state.apod} />
      </div>
    );
  }
}

export default App;
