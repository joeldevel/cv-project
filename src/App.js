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
          name: 'pepino',
          email: 'pepe@mail.com',
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
  }

  handleText(e) {
    console.log(e.target.value);
    e.persist();
    this.setState(prevState=>({
      userData:{
        ...prevState.userData,
        generalInfo: {
          ...prevState.userData.generalInfo,
          name: e.target.value
        }
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <section>
          <header>
            <h1>CV App</h1>
          </header>
          <DataSection title="general info">
            <InputText inputName="name" inputLabel="your name: "
                       value={this.state.userData.generalInfo.name}
                       onChange={this.handleText}
                       />
                     {/*
            <InputEmail inputName="email" inputLabel="your email: "
                       value={this.state.userData.generalInfo.email}/>
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
