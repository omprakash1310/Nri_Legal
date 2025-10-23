import React from 'react';
// Import the icons we need from 'react-icons'
import { 
  FaBalanceScale, FaLandmark, FaFileSignature, FaUserFriends,
  FaBuilding, FaHome, FaGavel, FaBriefcase 
} from 'react-icons/fa';

// mapping service names to their specific icons
const serviceIcons = {
  "Title Search": <FaFileSignature />,
  "Succession Certificate": <FaLandmark />,
  "Developer Claims": <FaBuilding />,
  "Banking/Finance Matters": <FaBriefcase />,
  "NCLT Matters": <FaBalanceScale />,
  "Real Estate Service": <FaHome />,
  "Litigation Matters": <FaGavel />,
  "Landlord Tenant Dispute": <FaUserFriends />
};

const services = Object.keys(serviceIcons); // Get the names from our map

function Services() {
  return (
    <section className="services-section">
      <h2>Comprehensive Suite of Legal Services</h2>
      <div className="services-grid">
        {services.map((serviceName) => (
          <div className="service-card" key={serviceName}>
            <div className="service-icon">
              {/* Using the icon from our map */}
              {serviceIcons[serviceName]}
            </div>
            <h3>{serviceName}</h3>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;