import React from 'react';
import './UsefulLinks.css'; // Importing the CSS file

const links = [
  { name: 'Cyber Crime Portal', image: '/placeholder.svg?height=100&width=100', url: '#' },
  { name: 'National Cyber Security', image: '/placeholder.svg?height=100&width=100', url: '#' },
  { name: 'Cyber Safety Tips', image: '/placeholder.svg?height=100&width=100', url: '#' },
  { name: 'Report Phishing', image: '/placeholder.svg?height=100&width=100', url: '#' },
];

export default function UsefulLinks() {
  return (
    <section className="useful-links-section">
      <h2 className="useful-links-title">Useful Links</h2>
      <div className="useful-links-grid">
        {links.map(({ name, image, url }) => (
          <a 
            key={name} 
            href={url} 
            className="useful-link-card"
          >
            <img src={image} alt={name} className="useful-link-image" />
            <span className="useful-link-text">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
