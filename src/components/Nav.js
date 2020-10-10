import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return <nav className="navbar">
    <ul className="navbar-nav">
      <li>
        <Link to="/portfolio" className="logo">
          <span>PORTFOLIO</span>
          <i id="logo" className="fas fa-angle-double-right"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/web" className="nav-link">
          <i className="fas fa-globe"></i>
          <span className="link-text">WEB</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/game" className="nav-link">
          <i className="fas fa-gamepad"></i>
          <span className="link-text">GAME</span>
        </Link>
      </li>
    </ul>
  </nav>
}