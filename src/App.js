import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Button type="danger">click me</Button>
        <Button type="primary">click me</Button>
        <Button>click me</Button>
        <Counter defaultCount={1} />
      </div>
    );
  }
}

export default App;
