import React from 'react';
import ControlButtons from './ControlButtons';


class DataSection extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      allowEdit: false
    }
    this.makeEditable = this.makeEditable.bind(this);
    // this.saveData = this.saveData.bind(this);
  }
  makeEditable(e) {
    // e.preventDefult();
    this.setState({allowEdit:true});
    // console.log('allowEdit', this.state.allowEdit);;
  }
  // saveData(e) {
  //   e.preventDefault();
  //   this.props.saveData
  // }
  render() {
    return(
      <article>
        <header>
          <h2>{this.props.title}</h2>
        </header>
          <form name={this.props.name}>
            {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {
                isReadOnly: this.state.allowEdit,
              });
            })
          }
            <ControlButtons makeEditable={this.makeEditable}
                            saveData={this.props.saveData}
                            />
          </form>
      </article>
    );
  }
}

export default DataSection;
