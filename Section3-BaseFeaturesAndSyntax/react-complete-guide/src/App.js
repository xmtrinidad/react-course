import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <h1>React App</h1>
        <Person />
      </div>
    );
  }
}

export default App;
