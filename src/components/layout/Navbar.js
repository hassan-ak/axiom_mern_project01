// imports
// React Imports
import React, { Component } from "react";
// PropTypes Imports
import PropTypes from "prop-types";

export class Navbar extends Component {
  // Default properties
  static defaultProps = {
    title: "GitHub Finder",
    icon: "fab fa-github",
  };
  // Type check for properties
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i class='fab fa-github'></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
