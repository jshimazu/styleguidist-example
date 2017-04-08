import React, { Component, PropTypes } from 'react';
import './style.scss';

class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['danger', 'primary']),
  };

  render() {
    const type = this.props.type || 'default';
    return (
      <button className="Button" data-type={type}>{this.props.children}</button>
    );
  }
}

export default Button;
