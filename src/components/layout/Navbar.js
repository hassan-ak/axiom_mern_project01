// imports
// React Imports
import React from "react";
// PropTypes Imports
import PropTypes from "prop-types";

// NavBar component
const Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </h1>
    </nav>
  );
};

// Default properties
Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github",
};
// Type check for properties
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

// Component Exports
export default Navbar;
