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
        </header>
          <form>
            {this.props.children}
            <ControlButtons/>
          </form>
      </article>
    );
  }
}

export default DataSection;
