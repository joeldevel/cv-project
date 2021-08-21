import React from 'react';
import ControlButtons from './ControlButtons';


class DataSection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <article>
        <header>
          <h2>{this.props.title}</h2>
          <div>
            {this.props.children}
            <ControlButtons/>
          </div>
        </header>
      </article>
    );
  }
}

export default DataSection;
