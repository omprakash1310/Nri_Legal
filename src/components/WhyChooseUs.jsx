import React from 'react';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-image">
        {/* This pulls the image from your 'public' folder */}
        <img src="/why-us-image.jpg" alt="Why Choose Us" />
      </div>
      <div className="why-choose-us-content">
        <h2>Why Choose Us</h2>
        <p>We are a premier global legal management firm set up 2 decades ago exclusively for NRIs.</p>
        <ul className="features-list">
          <li><span>✓</span> Over 2 decades of exclusive experience</li>
          <li><span>✓</span> Network of 500+ lawyers across India</li>
          <li><span>✓</span> Proactive, responsive, and hassle-free services</li>
          <li><span>✓</span> Transparent fee structure</li>
          <li><span>✓</span> 99% success rate in resolution of matters</li>
          <li><span>✓</span> Free consultation and review of documents</li>
        </ul>
        <button className="cta-button">Read More</button>
      </div>
    </section>
  );
}

export default WhyChooseUs;