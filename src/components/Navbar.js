import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar">
        <a className="hvr-sweep-to-top" href="#welcome">
          Welcome
        </a>
        <a className="hvr-sweep-to-top" href="#aboutMe">
          About Me
        </a>
        <a className="hvr-sweep-to-top" href="#projects">
          Projects
        </a>
        <a className="hvr-sweep-to-top" href="#contact">
          Contact Me
        </a>
      </nav>
    );
  }
}

export default Navbar;
