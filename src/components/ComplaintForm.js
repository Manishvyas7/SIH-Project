import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComplaintForm.css';
import cyberCrimeImage from './assets/cybercrime.jpg';
import financialCrimeImage from './assets/financialcrime.jpg';
import identityTheftImage from './assets/identitytheft.jpg';
import InstructionModal from './InstructionModal'; // Import the modal

const ComplaintForm = () => {
  const navigate = useNavigate();
  const [crimeType, setCrimeType] = useState(null); // Track the crime type for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle image click and show the modal
  const handleImageClick = (type) => {
    setCrimeType(type); // Set the crime type
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCrimeType(null);
  };

  // Function to navigate to the respective form
  const navigateToForm = () => {
    navigate('/complaint-form/${crimeType}');
  };

  return (
    <div className="complaint-form-page">
      <h2>COMPLAINT</h2>

      <ul className="info-list">
        <h4>NOTE</h4>
        <li>Ensure that all details regarding your complaint are accurate.</li>
        <li>Provide any supporting evidence, such as screenshots, documents, or other media.</li>
        <li>Choose the appropriate category for your complaint before proceeding.</li>
      </ul>

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

      {/* Show the modal if it's open */}
      {isModalOpen && (
        <InstructionModal
          crimeType={crimeType}
          closeModal={closeModal}
          navigateToForm={navigateToForm}
        />
      )}
    </div>
  );
};

export default ComplaintForm;