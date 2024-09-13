import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from './assets/logo.jpeg'; 
import Mainlogo from './assets/MainLogo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Mainlogo} alt="Your Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li> {/* Corrected path for Home */}
        <li><Link to="/track-complaint">Track Complaint</Link></li>
        <li><Link to="/our-records">Our Records</Link></li>
        <li><Link to="/awareness-camp">Awareness Camp</Link></li>
        <li><Link to="/faq">FAQ's</Link></li>
        {/* <li><Link to="/helpline-no">Helpline No</Link></li> */}
      </ul>
      <div className="navbar-btn">
        <Link to="/complaint-now" className="btn">Complaint Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
