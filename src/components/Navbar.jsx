import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use <Link> for all internal navigation */}
        <Link to="/"> 
          <img src="/logo.png" alt="NRI Legal Services Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li> {/* Link to our new page */}
        
        
        <li><a href="/#services">Practice Areas</a></li>
        <li><a href="#">Founder's Desk</a></li>
        <li><a href="/#blogs">Blogs</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      <a href="/#contact" className="cta-button">Book Consultation</a>
    </nav>
  );
}

export default Navbar;