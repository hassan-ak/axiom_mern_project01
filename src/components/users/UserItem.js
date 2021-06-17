// Imports
// React Imports
import React from "react";
// Prop types Imports
import PropTypes from "prop-types";

// UserItem component
// Destructring for props directly
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
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
};

// Type Checking
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
