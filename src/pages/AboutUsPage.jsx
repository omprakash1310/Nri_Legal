import React from 'react';

function AboutUsPage() {
  // We add 'padding' to give it space from the Navbar and Footer.
  const containerStyles = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const h1Styles = {
    fontSize: '36px',
    color: 'var(--color-primary-blue)',
    marginBottom: '20px'
  };

  const h2Styles = {
    fontSize: '28px',
    color: 'var(--color-primary-blue)',
    marginTop: '40px',
    marginBottom: '15px'
  };

  const pStyles = {
    marginBottom: '15px',
    lineHeight: '1.7',
    color: 'var(--color-text-light)'
  };


  return (
    <div className="about-us-container" style={containerStyles}>
      
      <h1 style={h1Styles}>About Us</h1>
      
      <div className="about-content">
        <h2 style={h2Styles}>Know Us</h2>
        <p style={pStyles}>
          NRI Legal Services is uniquely positioned as a Premier Global Legal Management firm to provide services exclusively to Non-Resident Indians and overseas people of Indian origin.
        </p>
        <p style={pStyles}>
          We specialize in delivering dedicated legal services relating to issues pertaining to immovable and moveable assets to the Indian diaspora based overseas.
        </p>

        <h2 style={h2Styles}>Our Mission</h2>
        <p style={pStyles}>
          To reinstate faith in people residing overseas about India and Indians as the mindset of people is so warped and steeped in suspicion against Indians.
        </p>
      </div>

    </div>
  );
}

export default AboutUsPage;