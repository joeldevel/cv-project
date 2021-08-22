import React from 'react';
import ControlButtons from './ControlButtons';


class DataSection extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      allowEdit: false
    }
    this.makeEditable = this.makeEditable.bind(this);
  }
  makeEditable(e) {
    // e.preventDefult();
    this.setState({allowEdit:true});
    console.log('allowEdit', this.state.allowEdit);;
  }
  render() {
    return(
      <article>
        <header>
          <h2>{this.props.title}</h2>
        </header>
          <form>
            {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {
                isReadOnly: this.state.allowEdit,
              });
            })
          }
            <ControlButtons makeEditable={this.makeEditable}/>
          </form>
      </article>
    );
  }
}

export default DataSection;
