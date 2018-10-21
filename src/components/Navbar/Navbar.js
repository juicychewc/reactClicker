import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Stroop Effect Game</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a className="message" href="/">{props.message}</a></li>
        <li><a href="/">Current Score: {props.currentScore}</a></li>
        <li><a href="/">Highest Score: {props.highScore}</a></li>
      </ul>
    </div>
  </nav>
    // <nav className="navbar navbar-expand-lg fixed-top">
    //     <h3 className="navbarName navbar-left">Stroop Effect Game</h3>
    //     <h3 className="navbarScore navbar-right">Current Score: {props.currentScore}   |   Highest Score: {props.highScore}</h3>
    // </nav>
);

export default Navbar;