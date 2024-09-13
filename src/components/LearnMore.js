import React, { useState } from 'react';
import './LearnMore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import indiaFlag from './assets/india-flag.jpg'; // Add path to India flag image
import useLocation from './useLocation'; // Import the custom hook

const LearnMore = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const location = useLocation(); // Use the custom hook

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div>
      <div className="learn-more-container">
        {/* Top Section: India Flag and Government Notice */}
        <div className="flag-container">
          <img src={indiaFlag} alt="India Flag" className="india-flag" />
          <div className="gov-notice">
            An official website of the Indian Government
          </div>
        </div>

        {/* Learn More Button */}
        <div className="learn-more-left">
          <button className="learn-more-btn" onClick={toggleInfoVisibility}>
            {isInfoVisible ? 'Hide Info' : 'Here\'s how you know!!'}
          </button>
        </div>
      </div>

      {/* Right Side: Social Media Links */}
      <div className="learn-more-right">
        <ul className="social-media-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
      <hr />

      {/* Additional Info (Toggled) */}
      {isInfoVisible && (
        <div className="extra-info">
          <p>
            This is an informational message about our services. We provide cybersecurity solutions to ensure
            the safety and protection of your digital assets. Reach out to us for more details.
          </p>
          {location && <p>Your location: {location}</p>} {/* Display location */}
        </div>
      )}
    </div>
  );
};

export default LearnMore;