import React, { useState } from 'react';

const TheftForm = ({ onSubmit }) => {
  const [victimName, setVictimName] = useState('');
  const [itemStolen, setItemStolen] = useState('');
  const [incidentDate, setIncidentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onSubmit({ victimName, itemStolen, incidentDate });
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
      
      <label>Item Stolen:</label>
      <input
        type="text"
        value={itemStolen}
        onChange={(e) => setItemStolen(e.target.value)}
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

export default TheftForm;