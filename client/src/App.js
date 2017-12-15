import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { weather: {} }

  componentDidMount() {
    /*fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));*/
    fetch('/weather')
      .then(res => res.json())
      .then(weather => this.setState({ weather }));
  }


  render() {
    console.log(this.state.weather);
    return (
      <div className="App">
        <h1>Weather</h1>
        <h2>Description: {this.state.weather["weather"][0]["description"]}</h2>
      </div>
    );
  }
}

export default App;
