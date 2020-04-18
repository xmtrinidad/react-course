import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Xavier', age: '33' },
      { name: 'Meme', age: '133' },
      { name: 'Dank', age: '12' }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    // DONT DO THIS: this.state.persons[0].name = "Meme Man";
    this.setState({
      persons: [
        { name: 'Meme Man', age: '33' },
        { name: 'Meme', age: '133' },
        { name: 'Dank', age: '50' }
      ]
    });
  };

  render() { 
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: memeing on peeps</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
