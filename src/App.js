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
  // State to store data from the Api call
  state = {
    users: [],
    loading: false,
  };
  // This function execute when ever the component renders
  // Api call to get data from the api
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

// Component Exports
export default App;
