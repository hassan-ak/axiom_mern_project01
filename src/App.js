// Imports
// React Imports
import React, { Component } from "react";
// Component Imports
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
// Styles Imports
import "./App.css";

// App component using Class
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

// Component Exports
export default App;
