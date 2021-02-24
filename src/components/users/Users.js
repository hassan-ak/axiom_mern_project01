import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

// Styling for User component
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
