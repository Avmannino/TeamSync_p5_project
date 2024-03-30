import React from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation
import './Navbar.css'; // Ensure the CSS file is correctly linked
import navLogo from "./assets/black_logo.png"; // Fix the import path for the navLogo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-logo">
        <img src={navLogo} alt="Navigation Logo" />
      </Link>
      <div className="nav-items">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/sports" className="nav-link">Sports</Link>
        <Link to="/schedules" className="nav-link">Schedules</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
