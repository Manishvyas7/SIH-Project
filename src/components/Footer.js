import React from 'react';
import { ShieldCheck } from 'lucide-react'; // Importing the icon
import './Footer.css'; // Importing the CSS file

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <ShieldCheck className="footer-icon" />
          <span className="footer-title">Cyber-Sentinels</span>
        </div>
        <div className="footer-info">
          <p>Visitors: 1,234,567</p>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
}
