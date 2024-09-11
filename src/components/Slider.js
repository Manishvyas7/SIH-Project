import React, { useState, useEffect } from 'react';
import './Slider.css';
import Deepfake from './assets/Deepfake.png'; // Import the image
import Hacker from './assets/Hacker.png';

const Slider = () => {
  const images = [
    Deepfake, // Local image
    Hacker,

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
