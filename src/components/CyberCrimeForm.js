import React from 'react';
import './CrimeForm.css';

const CyberCrimeForm = () => {
  return (
    <div className="crime-form-page">
      <h2>Cyber Crime Complaint Form</h2>
      <form className="crime-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Description of the incident</label>
          <textarea name="description" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CyberCrimeForm;