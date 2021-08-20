import React from 'react';
import './App.css';

import DataSection from './components/DataSection';

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <h1>CV App</h1>
        </header>
        <DataSection title="general info"/>
        <DataSection title="education"/>
        <DataSection title="experience"/>
      </section>
    </div>
  );
}

export default App;
