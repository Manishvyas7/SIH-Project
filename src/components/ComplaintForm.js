import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComplaintForm.css';

// Sample images for demonstration
import cyberCrimeImage from './assets/cybercrime.jpg'; 
import financialCrimeImage from './assets/financialcrime.jpg';
import identityTheftImage from './assets/identitytheft.jpg';

const ComplaintForm = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to specific forms
  const handleImageClick = (crimeType) => {
    navigate('/complaint-form/${crimeType}');
  };

  return (
    <div className="complaint-form-page">
      <h2>Complaint Types</h2>

      {/* Paragraph in bullet points */}
      <ul className="info-list">
        <li>Ensure that all details regarding your complaint are accurate.</li>
        <li>Provide any supporting evidence, such as screenshots, documents, or other media.</li>
        <li>Choose the appropriate category for your complaint before proceeding.</li>
      </ul>

      {/* Display clickable images */}
      <div className="photos-section">
        <div className="image-container" onClick={() => handleImageClick('cyber-crime')}>
          <img src={cyberCrimeImage} alt="Cyber Crime" className="crime-image" />
          <p>Cyber Crime</p>
        </div>
        <div className="image-container" onClick={() => handleImageClick('financial-crime')}>
          <img src={financialCrimeImage} alt="Financial Crime" className="crime-image" />
          <p>Financial Crime</p>
        </div>
        <div className="image-container" onClick={() => handleImageClick('identity-theft')}>
          <img src={identityTheftImage} alt="Identity Theft" className="crime-image" />
          <p>Identity Theft</p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;