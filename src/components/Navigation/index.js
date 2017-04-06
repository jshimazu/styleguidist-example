import React, { Component } from 'react';
import menuButton from './menuButton.svg';
import './style.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <span className="Navigation-MenuButton">
          <img src={menuButton} />
        </span>
        <span className="Navigation-Logo">LOGO</span>
      </nav>
    );
  }
}

export default Navigation;
