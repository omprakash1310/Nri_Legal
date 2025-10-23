import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Valued Clients Stories</h2>
      <p>Find out what our clients have to say about us.</p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"I have been very impressed by the manner in which my property related issues were settled by everyone at NRI Legal."</p>
          <h4>Jasvir Bahara</h4>
          <span>United Kingdom</span>
        </div>
        <div className="testimonial-card">
          <p>"Despite Covid-19 related challenges, Mohit and his team were very thorough in explaining the entire process..."</p>
          <h4>Manish Sharma</h4>
          <span>Canada</span>
        </div>
        <div className="testimonial-card">
          <p>"Anil Pathela. “NRI Legal Services deserves a big round of applause for their guidance, professional service and support..."</p>
          <h4>Anil Pathela</h4>
          <span>United Kingdom</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;