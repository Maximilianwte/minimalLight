import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ReactGA from "react-ga";

import "./Header.css";

// Google Analytics Get Inizialized as high as possible.
ReactGA.initialize("UA-109777178-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class Header extends Component {
  switchMenu() {
    $(".menuIcon").toggleClass("change");
    $(".container#menuOverlay").toggleClass("slideIn");
    console.log("Menu switched");
  }
  render() {
    return (
      <div className="container navLink" id="menuOverlay">
        <div className="menuIcon" onClick={this.switchMenu}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <Link to="/" onClick={this.switchMenu}>Home</Link>
        <Link onClick={this.switchMenu} to="/apps">Web Apps</Link>
        <Link onClick={this.switchMenu} to="/kontakt">Kontakt</Link>       
      </div>
    );
  }
}

export default Header;
