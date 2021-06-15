// Imports
// React Imports
import React, { Component } from "react";

// UserItem component
class UserItem extends Component {
  // States
  state = {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    // Destructring to use state data
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='Profile'
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          Profile
        </a>
      </div>
    );
  }
}

export default UserItem;
