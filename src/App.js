// Imports
// React Imports
import React, { Component } from "react";
// Component Imports
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
// Styles Imports
import "./App.css";

// App component using Class
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

// Component Exports
export default App;
