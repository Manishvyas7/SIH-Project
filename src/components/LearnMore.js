import React, { useState } from 'react';
import './LearnMore.css';
import facebookLogo from './assets/facebook-logo.jpg'; // Ensure correct path
import twitterLogo from './assets/twitter-logo.jpg';
import linkedinLogo from './assets/linkedin-logo.jpg';

const LearnMore = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="learn-more-container">
      {/* Left Side: Learn More Button */}
      <div className="learn-more-left">
        <button className="learn-more-btn" onClick={toggleInfoVisibility}>
          {isInfoVisible ? 'Hide Info' : 'Learn More'}
        </button>
      </div>

      {/* Right Side: Social Media Links */}
      <div className="learn-more-right">
        <ul className="social-media-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="social-icon" />
              
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" className="social-icon" />
              
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
              
            </a>
          </li>
        </ul>
      </div>

      {/* Additional Info (Toggled) */}
      {isInfoVisible && (
        <div className="extra-info">
          <p>
            Welcome to our cyber security platform. We are dedicated to providing top-notch protection against
            cyber threats. Our goal is to safeguard your personal and business data in this digital era.
          </p>
        </div>
      )}
    </div>
  );
};

export default LearnMore;