import React, { useState } from 'react';

const CyberCrimeFormm = ({ onSubmit }) => {
  const [victimName, setVictimName] = useState('');
  const [typeOfAttack, setTypeOfAttack] = useState('');
  const [incidentDate, setIncidentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onSubmit({ victimName, typeOfAttack, incidentDate });
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
      
      <label>Type of Cyber Attack:</label>
      <input
        type="text"
        value={typeOfAttack}
        onChange={(e) => setTypeOfAttack(e.target.value)}
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

export default CyberCrimeFormm;