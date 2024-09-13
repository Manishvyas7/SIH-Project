import React from 'react';
import { useParams } from 'react-router-dom';

const InstructionPage = () => {
  const { crimeType } = useParams(); // Get the crime type from the URL

  // Function to render instructio5ns based on crimeType
  const renderInstructions = () => {
    switch (crimeType) {
      case 'cyber-crime':
        return <p>Required documents: Aadhar, PAN Card, and related documents (less than 5MB) for Cyber Crime.</p>;
      case 'financial-crime':
        return <p>Required documents: Bank statements, financial records, and related documents (less than 5MB) for Financial Crime.</p>;
      case 'identity-theft':
        return <p>Required documents: Proof of identity, such as a passport or driving license, for Identity Theft.</p>;
      default:
        return <p>Invalid crime type. Please select a valid option.</p>;
    }
  };

  return (
    <div>
      <h1>Instructions for {crimeType.replace('-', ' ').toUpperCase()}</h1>
      {renderInstructions()}
    </div>
  );
};

export default InstructionPage;