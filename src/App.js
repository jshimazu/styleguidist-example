import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Button type="danger">click me</Button>
        <Button type="primary">click me</Button>
        <Button>click me</Button>
      </div>
    );
  }
}

export default App;
