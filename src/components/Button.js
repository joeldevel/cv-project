import React from 'react';

class Button extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <button type={this.props.type}
        onClick={this.props.onClick}
        >{this.props.label}</button>
    )
  }
}

export default Button;
