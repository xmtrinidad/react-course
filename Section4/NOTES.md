# Section 4 - Working with Lists and Conditionals

## Simple Example

```jsx
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
```