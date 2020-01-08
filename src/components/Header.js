import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Header = props => {
  return (
    <Router>
      <div className="wrapper">
        <nav className="menu">
          <NavLink className="a1" onClick={props.scroll} to="/about">
            About
          </NavLink>
          <NavLink
            className="a2"
            onClick={props.scrollToDiscography}
            to="/discography"
          >
            Discography
          </NavLink>
          <NavLink onClick={props.scrollToWrapConc} to="/concert">
            Concert Tours
          </NavLink>
          <NavLink onClick={props.scrollToWrapperLatter} to="/latter">
            Latter Compositions
          </NavLink>
          <NavLink to="/new">new track</NavLink>
          <NavLink to="/events">upcoming events</NavLink>
          <NavLink to="/history">history</NavLink>
          <NavLink to="/conctact">contact</NavLink>
        </nav>
      </div>
    </Router>
  );
};

export default Header;
