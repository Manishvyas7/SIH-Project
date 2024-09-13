import React from 'react';
import { Shuffle, IndianRupee , ShieldAlert } from 'lucide-react'; // Imported Shuffle instead of Swap
import './Card.css'; // Make sure to link the CSS file

const crimes = [
  { name: 'Face Swapping', Icon: Shuffle },  // Used Shuffle instead of Swap
  { name: 'Financial Fraud', Icon: IndianRupee },
  { name: 'Other Cyber Crime', Icon: ShieldAlert },
];

export default function CrimeCards() {
  return (
    <section className="crime-cards-section">
      <div className="crime-cards-container">
        {crimes.map(({ name, Icon }) => (
          <div key={name} className="crime-card">
            <Icon className="card-icon" />
            <h3 className="card-title">{name}</h3>
            <p className="card-description">
              Report incidents related to {name.toLowerCase()} here.
            </p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
