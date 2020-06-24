import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import SearchField from './components/SearchField.js'
import Body from './components/body.js';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      date: '', /* new Date().toJSON().slice(0,10) */// it's not working ,UTC timezone
      apod: {}
    }
  }

  /* ////////////////////////////////// */

  componentDidMount(){
    let date = new Date();
    let today = date.getFullYear()+'-'+("0"+(date.getMonth()+1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2); //stackoverflow
    this.setState({date:today})
    
    this.fetchData(this.state.date);   
  }

  fetchData(date){
    const nasa_key= 'DkNMzkFMlHAPPxLOvNGqeAnCkAyrmOtBIjhg1Rgs';    

    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${nasa_key}`)
          .then(response=>response.json())
          .then(data=>this.setState({apod:data})
          )          
  }

  componentDidUpdate(prevProps, prevState){
    /* console.log('componentDidUpdate', this.state.date, prevState.date); */
    if (this.state.date !== prevState.date)
      this.fetchData(this.state.date);   
  }

  /* ////////////////////////////////// */
  onDateFieldChange =(event)=>{
    let date = new Date();
    /* This control statement is for avoid to user change the date with th keyboard */
    if(event.target.value <= date.getFullYear()+'-'+("0"+(date.getMonth()+1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2)){
      this.setState({ date: event.target.value })      
    }/* else{ //this part is not necesary
      console.log("date out of range",event.target.value )
      this.setState({ date: date.getFullYear()+'-'+("0"+(date.getMonth()+1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2) }) 
    } */
     
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
