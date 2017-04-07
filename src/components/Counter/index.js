import React, { Component, PropTypes } from 'react';
import './style.scss';

class Counter extends Component {
  static propTypes = {
    /**
     * カウンターの初期値
     */
    defaultCount: PropTypes.number,
  };

  static defaltProps = {
    defaultCount: 0,
  };

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const count = this.state.count;
    return (
      <div>
        <input type="text" value={count} />
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default Counter;
