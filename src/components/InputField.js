import React from 'react';

class InputField extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <div>
        <label htmlFor={this.props.inputName}>{this.props.inputLabel}</label>
        <input type={this.props.inputType} name={this.props.inputName}
               value={this.props.value}
               onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default InputField;
