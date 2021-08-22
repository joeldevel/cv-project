import React from 'react';
import Button from './Button';

class ControlButtons extends React.Component {
  render() {
    return (
      <>
      <Button label="edit"/>
      <Button label="submit" type="submit"/>
      </>
    );
  }
}

export default ControlButtons;
