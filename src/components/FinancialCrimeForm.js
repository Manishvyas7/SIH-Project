import React from 'react';
import './CrimeForm.css';

const FinancialCrimeForm = () => {
  return (
    <div className="crime-form-page">
      <h2>Financial Crime Complaint Form</h2>
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
          <label>Financial Transaction Details</label>
          <input type="text" name="transaction-details" placeholder="Enter transaction details" required />
        </div>
        <div className="form-group">
          <label>Description of the Incident</label>
          <textarea name="description" placeholder="Describe the financial crime incident" required></textarea>
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

export default FinancialCrimeForm;