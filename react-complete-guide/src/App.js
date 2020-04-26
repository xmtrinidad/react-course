import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Xavier', age: '33' },
      { name: 'Meme', age: '133' },
      { name: 'Dank', age: '12' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DONT DO THIS: this.state.persons[0].name = "Meme Man";
    this.setState({
      persons: [
        { name: 'Meme Man', age: '33' },
        { name: 'Meme', age: '133' },
        { name: newName, age: '50' }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Meme Man', age: '33' },
        { name: event.target.value, age: '133' },
        { name: 'XMT', age: '50' }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }; 
    return (
      <div className="App">
        <h1>React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        { 
          this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'YOYOYO')}
              changed={this.nameChangedHandler}>My hobbies: memeing on peeps</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div>  : null
        }
      </div>
    );
  }
}

export default App;
