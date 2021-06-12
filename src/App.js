// Imports
// React Imports
import React, { Component } from "react";
// Styles Imports
import "./App.css";

// App component using Class
class App extends Component {
  // Class Function
  ageFunction = () => "28";
  render() {
    // using a variable in the App
    const name = "Hassan";
    // function declaration in reatct
    const nameFunction = () => "Zubair";
    // While loading data from APi how to use loading functionality
    const loading = false;
    const showName = true;
    if (loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        {/* using a varibale or JS expression in the code */}
        <h1>Hello {name.toUpperCase()}!</h1>
        {/* using some function in code */}
        <h2>Hello {nameFunction()}!</h2>
        {/* using class function in code */}
        <h3>
          {nameFunction()} is {this.ageFunction()} years old.
        </h3>
        {/* using ternary operator for conditions */}
        {loading ? <h4>Loading...</h4> : <h4>Loaded</h4>}
        {/* Checking for multiple coditions */}
        {/* case one */}
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h4>Hello {showName ? name : null}</h4>
        )}
        {/* case two */}
        {loading ? <h4>Loading...</h4> : <h4>Hello {!showName && name}</h4>}
      </div>
    );
  }
}

// Component Exports
export default App;
