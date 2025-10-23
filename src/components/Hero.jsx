import React, { useState } from 'react'; // 1. Import useState

function Hero() {
  // 2. Set up state variables for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');

  // 3. This function runs when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading

    // 4. We just log the data for now.
    // This is where you would later send it to a backend!
    console.log('Form Submitted!', {
      name: name,
      email: email,
      mobile: mobile,
      query: query,
    });

    // 5. Clear the form after submission
    setName('');
    setEmail('');
    setMobile('');
    setQuery('');
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Premier Global Legal Management Firm</h1>
        <div className="hero-features">
          <p><span>✓</span> Legacy of excellence. SINCE 2 DECADES.</p>
          <p><span>✓</span> Empathy and integrity. IN SERVICES.</p>
          <p><span>✓</span> Delivering solutions. ACROSS INDIA.</p>
        </div>
        <button className="cta-button large">Schedule a Consultation</button>
      </div>
      
      <div className="hero-form-container">
        <h3>Schedule a Consultation</h3>
        <p>Get a call back from our legal experts</p>
        
        {/* 6. Hook up the handleSubmit function to the form */}
        <form className="hero-form" onSubmit={handleSubmit}>
          
          {/* 7. Connect each input to its state variable */}
          <input 
            type="text" 
            placeholder="Name*" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email*" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="tel" 
            placeholder="Mobile Number*" 
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required 
          />
          <textarea 
            placeholder="Your Query* (Please specify in detail)" 
            rows="4" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea>
          
          <button type="submit" className="cta-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;