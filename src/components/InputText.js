import React from 'react';
import InputField from './InputField';

class InputText extends React.Component {
    render() {
      return(
        <InputField inputType="text" inputName={this.props.inputName}
          inputLabel={this.props.inputLabel} value={this.props.value}/>
      );
    }
}

export default InputText;
