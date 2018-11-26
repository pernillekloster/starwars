import React, { Component } from 'react';
import './App.css';
import Axios from '../node_modules/axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "Pernille",
      hairColor: "",
      gender: ""
    }
  }

    componentDidMount(){
      Axios.get("https://swapi.co/api/people/1")
      .then (result => 
        this.setState({
          name : result.data.name,
          hairColor: result.data.hair_color,
          gender: result.data.gender
      }))
    }

  render() {
    return (
      <div className="App">
        <h1> The name: {this.state.name} </h1>
        <h1> The haircolor: {this.state.hairColor} </h1>
        <h1> The gender: {this.state.gender} </h1>
      </div>
    );
  }
}

export default App;
