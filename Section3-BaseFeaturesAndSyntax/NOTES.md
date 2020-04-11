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

# Understanding JSX

Behind the scenes React uses the ```createElement``` method to render HTML

# JSX Restrictions

Since the HTML written in a JSX file isn't really HTML, there are some restrictions.  For example, we have to use ```className``` instead of ```class``` in HTML because ```class``` will throw an error