// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import './Navbar.css';
import logo from './assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Your Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/track-complaint">Track Complaint</Link></li>
        <li><Link to="/our-records">Our Records</Link></li>
        <li><Link to="/awareness-camp">Awareness Camp</Link></li>
        <li><Link to="/faq">FAQ's</Link></li>
        {/* <li><Link to="/helpline-no">Helpline No</Link></li> */}
      </ul>
      <div className="navbar-btn">
        <Link to="/complaint-now" className="btn">Complaint Now</Link> {/* Updated to Link */}
      </div>
    </nav>
  );
};

export default Navbar;