import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] =  useState({
    persons: [
      { name: 'Xavier', age: '33' },
      { name: 'Meme', age: '133' },
      { name: 'Dank', age: '12' }
    ],
    otherState: 'some other state'
  });

  const switchNameHandler = () => {
    // console.log('was clicked');
    // DONT DO THIS: personsState.persons[0].name = "Meme Man";
    setPersonsState({
      persons: [
        { name: 'Meme Man', age: '33' },
        { name: 'Meme', age: '133' },
        { name: 'Dank', age: '50' }
      ]
    });
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: memeing on peeps</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;


