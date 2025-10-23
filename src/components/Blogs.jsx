import React from 'react';

function Blogs() {
  return (
    <section className="blogs-section">
      <h2>Knowledge Hub</h2>
      <p>Latest updates from our legal experts</p>
      <div className="blogs-grid">
        <div className="blog-card">
          <img src="/blog-image-1.jpg" alt="Blog 1" />
          <div className="blog-content">
            <h3>Joint Property Ownership in India: Types, Rights, Rules...</h3>
            <p>Joint ownership of property in India can be a complex affair, especially for...</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="blog-card">
          <img src="/blog-image-2.jpg" alt="Blog 2" />
          <div className="blog-content">
            <h3>Fight Against Fraudulent Builders – Legal Rights in Property...</h3>
            <p>Investing in real estate in India can be a rewarding experience. However, the...</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="blog-card">
          <img src="/blog-image-3.jpg" alt="Blog 3" />
          <div className="blog-content">
            <h3>Criminal Law for NRIs in India: Rights, Challenges, and Legal...</h3>
            <p>Navigating the Indian criminal justice system can be daunting for anyone, but for...</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;