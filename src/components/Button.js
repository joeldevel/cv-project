import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button>{this.props.label}</button>
    )
  }
}

export default Button;
