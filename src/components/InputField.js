import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: true
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    if(this.state.isReadOnly == true) {
      console.log('input has been updated', this.state.isReadOnly)
      this.setState({isReadOnly:false});
    }
  }
  render() {
    console.log(this.props.isReadOnly)
    return(
      <div>
        <label htmlFor={this.props.inputName}>{this.props.inputLabel}</label>
        <input type={this.props.inputType} name={this.props.inputName}
               value={this.props.value}
               onChange={this.props.onChange}
               readOnly={this.state.isReadOnly}
               />
      </div>
    );
  }
}

export default InputField;
