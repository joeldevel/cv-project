import React from 'react';
import ControlButtons from './ControlButtons';
import InputField from './InputField';

class DataSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <article>
        <header>
          <h2>{this.props.title}</h2>
          <div>
            <InputField inputType="text" inputName="name" inputLabel="your name"/>
            <InputField inputType="email" inputName="email" inputLabel="your email"/>
            <InputField inputType="tel" inputName="phone" inputLabel="your phone"/>
            <ControlButtons/>
          </div>
        </header>
      </article>
    );
  }
}

export default DataSection;
