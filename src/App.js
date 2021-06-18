// Imports
// React Imports
import React, { Component } from "react";
// Component Imports
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
// Axios imports
import axios from "axios";
// Styles Imports
import "./App.css";

// App component using Class
class App extends Component {
  // This function execute when ever the component renders
  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then((res) => console.log(res.data));
  }
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
