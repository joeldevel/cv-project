import React from 'react';
import InputField from './InputField';

class InputEmail extends React.Component {
    render() {
      return(
        <InputField inputType="email" inputName={this.props.inputName}
          inputLabel={this.props.inputLabel} value={this.props.value}/>
      );
    }
}

export default InputEmail;
