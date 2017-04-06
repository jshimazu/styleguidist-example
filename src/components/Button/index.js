import React, { Component, PropTypes } from 'react';
import './style.scss';

class Button extends Component {
  static propTypes = {
    /**
     * size 
     */
    size: PropTypes.oneOf(['small', 'large']),
    /**
     * type
     */
    type: PropTypes.oneOf(['danger', 'primary']),
  };
  render() {
    const type = this.props.type || 'default';
    const size = this.props.size || 'default';
    return (
      <button className="Button" data-type={type} data-size={size}>{this.props.children}</button>
    );
  }
}

export default Button;
