import React from 'react';
import './CrimeForm.css';

const IdentityTheftForm = () => {
  return (
    <div className="crime-form-page">
      <h2>Identity Theft Complaint Form</h2>
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
          <label>Type of Identity Theft</label>
          <select name="identity-theft-type" required>
            <option value="stolen-identity">Stolen Identity</option>
            <option value="fraudulent-credit">Fraudulent Credit Card</option>
            <option value="social-security-fraud">Social Security Fraud</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description of the Incident</label>
          <textarea name="description" placeholder="Describe how your identity was stolen" required></textarea>
        </div>
        <div className="form-group">
          <label>Upload Supporting Documents</label>
          <input type="file" name="supporting-documents" />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default IdentityTheftForm;