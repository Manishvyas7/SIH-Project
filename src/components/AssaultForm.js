import React, { useState } from 'react';
import './AssaultForm.css';  // Importing the CSS file

const AssaultForm = ({ onSubmit }) => {
  const [victimName, setVictimName] = useState('');
  const [assailantDescription, setAssailantDescription] = useState('');
  const [incidentDate, setIncidentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onSubmit({ victimName, assailantDescription, incidentDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Victim Name:</label>
      <input
        type="text"
        value={victimName}
        onChange={(e) => setVictimName(e.target.value)}
        required
      />
      
      <label>Description of Assailant:</label>
      <input
        type="text"
        value={assailantDescription}
        onChange={(e) => setAssailantDescription(e.target.value)}
        required
      />
      
      <label>Date of Incident:</label>
      <input
        type="date"
        value={incidentDate}
        onChange={(e) => setIncidentDate(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AssaultForm;
