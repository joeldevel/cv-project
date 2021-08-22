import React from 'react';
import './App.css';

import DataSection from './components/DataSection';
import InputText from './components/InputText';
import InputEmail from './components/InputEmail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        generalInfo: {
          name: '',
          lastname: '',
          email: '',
          telephone: ''
        },
        education: {
          school: 'UTN',
          title: 'Technological engineer',
          date: ''
        },
        experience: {
          companyName: '',
          position: '',
          mainTasks: '',
          from: '',
          until: ''
        }
      }
    } // end state

    this.handleText = this.handleText.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
    this.saveData = this.saveData.bind(this);

  }
  componentDidMount() {
    console.log('mounting');
    // check for data in localstorage
    const generalInfo = localStorage.getItem('generalInfo');
    if(generalInfo) {
      let generalInfoObj = JSON.parse(generalInfo);

      this.setState(prevState=>({
        userData:{
          ...prevState.userData,
          generalInfo: generalInfoObj
        }
      }))
    }
  }
  handleText(e) {
    console.log(e.target);
    //see event polling
    e.persist();
    let propToUpdate = '';
    if(e.target.name === "name") {
      propToUpdate = "name";
    }
    if(e.target.name === "lastname") {
      propToUpdate = "lastname";
    }
    if(e.target.name === "email") {
      propToUpdate = "email";
    }

    this.setState(prevState=>({
      userData:{
        ...prevState.userData,
        generalInfo: {
          ...prevState.userData.generalInfo,
          [propToUpdate]: e.target.value,
        }
      }
    }))
  }

  makeEditable() {

  }

  saveData(e) {
    e.preventDefault();
    const dataSubsetParent = e.target.parentNode.getAttribute('name');
    const dataToSave = this.state.userData[dataSubsetParent];
    // console.log(dataToSave);
    // dataToSave.forEach((piece)=>console.log(piece));
    localStorage.setItem([dataSubsetParent], JSON.stringify(dataToSave));
  }
  render() {
    return (
      <div className="App">
        <section>
          <header>
            <h1>CV App</h1>
          </header>
          <DataSection title="general info" makeEditable={this.makeEditable}
                        saveData={this.saveData} name="generalInfo">
            <InputText inputName="name" inputLabel="your name: "
                       value={this.state.userData.generalInfo.name}
                       onChange={this.handleText}
                       />
            <InputText inputName="lastname" inputLabel="your lastname: "
                      value={this.state.userData.generalInfo.lastname}
                      onChange={this.handleText}
                      />
            <InputEmail inputName="email" inputLabel="your email: "
                       value={this.state.userData.generalInfo.email}
                       onChange={this.handleText}
                       />
                     {/*
                       */}
          </DataSection>
          {/*
          <DataSection title="education">
            <InputText inputName="school" inputLabel="your school: "
                       value={this.state.userData.education.school}/>
            <InputText inputName="title" inputLabel="your title: "
                       value={this.state.userData.education.title}/>
          </DataSection>
          */}
          {/*
          <DataSection title="experience"/>
          */}
        </section>
      </div>
    );
  }
}

export default App;
