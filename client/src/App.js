import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { weather: {} }
  }

  componentDidMount() {
    fetch('/weather')
      .then(res => res.json())
      .then(weather => this.setState({ weather }));
  }


  render() {
    console.log(this.state.weather);
    var description = 'No description currently available';
    if(this.state.weather['weather'] !== undefined){
      description = this.state.weather['weather'][0]['description'];
    }

    return (
      <div className="App">
        <h1>Weather</h1>
        <h2>Description: { description }</h2>
      </div>
    );
  }
}

export default App;
