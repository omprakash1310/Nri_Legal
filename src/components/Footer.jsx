import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h4>About Us</h4>
          <p>We are a premier global legal management firm set up 2 decades ago exclusively for NRIs. Our purpose since our inception has been to offer a proactive, responsive and hassle-free legal services to overseas Indians.</p>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">Title Search</a></li>
            <li><a href="#">Partition of Property</a></li>
            <li><a href="#">Transfer of Property</a></li>
            <li><a href="#">Succession Certificate</a></li>
            <li><a href="#">Tax Matters</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Global Footprint</h4>
          <ul className="footer-links">
            <li><a href="#">United Kingdom</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">India</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Sector 82, JLPL, Industrial Area, SAS Nagar, Punjab</p>
          <p>+91-0000000000</p>
          <p>sample123@gmail.com</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p> {new Date().getFullYear()} NRI Legal Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;