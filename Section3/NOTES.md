# Using a build workflow

## Why

* Recommended for SPAs and MPAs
* Optimize code
* Use Next-Gen JS
* Be more productive

## How

* Dependency management - npm or yarn
* Bundler - Webpack
* Compiler - Babel + presets
* Development server

# Using Create React App

https://github.com/facebook/create-react-app

```
npx create-react-app my-app
cd my-app
npm start
```

# Folder Structure

```package.json``` - typical npm package.json listing scripts, dependencies and various meta information

```node_modules``` - lots of things that make React work

```public index.html``` - the sole HTML file where script files get added from build workflow

```public manifest.json``` - PWA meta data

```src``` - where the React app actually lives

```index.js``` - this connects the public index.html file root element

```App.js``` - the main app component

# Component Basics


## Class example

```javascript
class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <h1>React App</h1>
      </div>
    );
  }
}
```

## Function example

```javascript
function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}
```

## ES6 Example

```javascript
import React from 'react';

const app = () => {
    return <p>app</p>
};

export default person;
```

# Understanding JSX

Behind the scenes React uses the ```createElement``` method to render HTML

# JSX Restrictions

Since the HTML written in a JSX file isn't really HTML, there are some restrictions.  For example, we have to use ```className``` instead of ```class``` in HTML because ```class``` will throw an error

## Outputting dynamic content

use ```{}``` within HTML/JSX

```jsx
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old</p>
};
```

## Working with props

Attach properties to the component:

```jsx
<Person name="meme" age="10"/>
```

Within the component, using the *props* keyword

```jsx
const person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old</p>
};
```

### "children" prop

To pass data down into a component that isn't an attribute or property like in this example:

```jsx
<Person name="Meme" age="133">I want to pass this down</Person>
```

use ```props.children``` within the component

```jsx
const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  )
};
```

## Understanding & Using State

*state* is used within a React class component

```jsx
class App extends React.Component {
  state = {
    persons: [
      { name: 'Xavier', age: '33' },
      { name: 'Meme', age: '133' },
      { name: 'Dank', age: '12' }
    ]
  }

  render() { 
    return ();
  }
}
```

## Handling Events with Methods

basic click event with method:

```jsx
class App extends React.Component {

  switchNameHandler = () => {
    console.log('was clicked');
  };

  render() { 
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}
```

list of events you can listen to:

https://reactjs.org/docs/events.html#supported-events

## Manipulating State

First thing to point out is that you shouldn't try changing state directly like this:

```jsx
switchNameHandler = () => {
  this.state.persons[0].name = "Meme Man";
};
```

This won't update the state and give a warning in dev tools

State should be handled using the ```setState()``` method

```jsx
switchNameHandler = () => {
  // DONT DO THIS: this.state.persons[0].name = "Meme Man";
  this.setState({
    persons: [
      { name: 'Meme Man', age: '33' },
      { name: 'Meme', age: '133' },
      { name: 'Dank', age: '50' }
    ]
  });
};
```

## Using the useState() hook for state manipulation

## Passing Method References Between Components

Methods can be passed down as props into components

```jsx
<Person
  click={this.myClickEvent}>My hobbies: memeing on peeps
</Person>
```

```jsx
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Click me</p>
    </div>
  )
};
```

## Adding Two Way Binding

## Stylesheets and Inline Styles

Using a ```.css``` file with a component doesn't scope the CSS file style to the component, so we have to rely on class names

Another way to style components using inline styles is using a style object:

```jsx
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};
```

And then apply it to the element:

```jsx
<button style={style}>My Button</button>
```