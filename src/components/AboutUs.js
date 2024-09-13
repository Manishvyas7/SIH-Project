import React from 'react';
import { ShieldCheck } from 'lucide-react'; // Ensure you have this dependency installed
import './AboutUs.css'; // Import the CSS for About Us

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <ShieldCheck className="about-icon" />
        <h2 className="about-title">About Cyber-Sentinels</h2>
        <p className="about-description">
          Our mission is to create a safer digital environment by empowering citizens to report cyber crimes efficiently. 
          We strive to increase awareness and provide quick responses to cyber security threats.
        </p>
        <div className="about-features">
          {['Expert Team', 'Quick Response', 'Secure Platform'].map((item) => (
            <div key={item} className="about-feature-card">
              <h3 className="about-feature-title">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}