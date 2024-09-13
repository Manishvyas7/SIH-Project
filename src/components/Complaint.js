import React, { useState } from 'react';
import './Complaint.css';

// Sample images for demonstration
import sampleImage1 from './assets/cybercrime3.jpeg'; // Ensure correct path
import sampleImage2 from './assets/sample2.jpg'; 


const Complaint = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div className="complaint-page">
      <h2>What is Cyber Crime?</h2>

      {/* Display photos */}
      <div className="photos-section">
        <img src={sampleImage1} alt="Sample 1" className="sample-image" />
        <img src={sampleImage2} alt="Sample 2" className="sample-image" />
      </div>

      {/* Paragraph in bullet points */}
      <div>
          {/* <h2 className="info-title">What is Cyber Crime?</h2> */}
          <p className="info-text">
            Cyber crime refers to criminal activities carried out by means of computers or the Internet. 
            It includes anything from downloading illegal music files to stealing millions of dollars from online bank accounts.
          </p>
          <p className="info-text">
            Cyber crime also includes non-monetary offenses, such as creating and distributing viruses on other computers 
            or posting confidential business information on the Internet.
          </p>
        </div>

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