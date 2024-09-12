import React, { useState } from 'react';
import './InstructionModal.css'; // Add your CSS styles here

const InstructionModal = ({ crimeType, closeModal, navigateToForm }) => {
  const [documents, setDocuments] = useState({
    aadhaar: null,
    pan: null,
    voterId: null,
    drivingLicense: null,
    passport: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0] && files[0].size <= 5242880) { // 5MB size limit
      setDocuments((prevDocs) => ({
        ...prevDocs,
        [name]: files[0],
      }));
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const handleSubmit = () => {
    // Assuming validation passes
    navigateToForm();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Please keep this information ready before filling this form for {crimeType.replace('-', ' ')}</h2>
        <ul>
          <li className="head">Ensure all uploaded documents are below 5MB in size.</li>
          <li className="head">Please upload valid identification documents:</li>
          <ul>
            <li>Aadhaar</li>
            <li>PAN Card</li>
            <li>Voter ID</li>
            <li>Driving License</li>
            <li>Passport</li>
          </ul>
        </ul>

        {/* Example of file inputs (optional based on requirements) */}
        <input type="file" name="aadhaar" onChange={handleFileChange} />
        <input type="file" name="pan" onChange={handleFileChange} />

        <div className="buttons">
          <button onClick={handleSubmit} className="btn">Proceed to Form</button>
          <button onClick={closeModal} className="btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;