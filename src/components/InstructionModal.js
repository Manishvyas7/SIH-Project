import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InstructionModal = ({ crimeType, closeModal }) => {
  const navigate = useNavigate();
  const [isModalActive, setIsModalActive] = useState(false); // For animation

  useEffect(() => {
    // Activate modal after it has been rendered, for smooth animation
    setIsModalActive(true);
  }, []);

  const handleFormRedirect = () => {
    switch (crimeType) {
      case 'identity-theft':
        navigate('/theft-form'); // Redirect to identity theft form page
        break;
      case 'financial-crime':
        navigate('/financial-crime-form'); // Redirect to financial crime form page
        break;
      case 'cyber-crime':
        navigate('/cyber-crime-form'); // Redirect to cyber crime form page
        break;
      default:
        return;
    }
  };

  const handleClose = () => {
    setIsModalActive(false);
    setTimeout(() => {
      closeModal();
    }, 400); // Delay to match the animation duration
  };

  return (
    <>
      <div
        className={`modal-background ${isModalActive ? 'active' : ''}`}
        onClick={handleClose}
      />
      <div className={`modal ${isModalActive ? 'active' : ''}`}>
        <div className="modal-content">
          <h2 className="head">
            Please keep this information ready before filling your complaint
          </h2>
          <ul>
            <li>Aadhar Card</li>
            <li>Voter Card</li>
            <li>Passport</li>
            <li>Driving License</li>
          </ul>
          <div className="buttons">
            <button onClick={handleFormRedirect} className="btn">
              Proceed to Form
            </button>
            <button onClick={handleClose} className="btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructionModal;
