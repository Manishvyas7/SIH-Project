import React, { useState } from 'react';
import './Complaint.css';

// Sample images for demonstration
import sampleImage1 from './assets/sample1.png'; // Ensure correct path
import sampleImage2 from './assets/sample2.jpg'; 

const Complaint = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div className="complaint-page">
      <h2>Complaint Information</h2>

      {/* Display photos */}
      <div className="photos-section">
        <img src={sampleImage1} alt="Sample 1" className="sample-image" />
        <img src={sampleImage2} alt="Sample 2" className="sample-image" />
      </div>

      {/* Paragraph in bullet points */}
      <ul className="info-list">
        <li>Provide details of your complaint clearly and concisely.</li>
        <li>Include any relevant evidence or documents to support your complaint.</li>
        <li>Ensure that all required fields in the form are filled out accurately.</li>
        <li>Be honest and provide accurate information to facilitate a smooth process.</li>
      </ul>

      {/* Checkbox to reveal form link */}
      <div className="checkbox-section">
        <label>
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          I have read and understood the instructions.
        </label>
      </div>

      {/* Conditional link to the form */}
      {isCheckboxChecked && (
        <div className="form-link">
          <a href="/complaint-form" className="form-link-btn">Go to Complaint Form</a>
        </div>
      )}
    </div>
  );
};

export default Complaint;