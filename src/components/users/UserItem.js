// Imports
// React Imports
import React, { Component } from "react";

// UserItem component
class UserItem extends Component {
  // constructor function
  constructor() {
    super();
    this.state = {
      login: "mojombo",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    };
  }
  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.state.avatar_url}
          alt='Profile'
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{this.state.login}</h3>
        <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
          Profile
        </a>
      </div>
    );
  }
}

export default UserItem;
