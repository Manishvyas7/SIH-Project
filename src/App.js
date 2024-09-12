import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Card from './components/Card';
import Complaint from './components/Complaint';
import ComplaintForm from './components/ComplaintForm';
import CyberCrimeForm from './components/CyberCrimeForm';
import FinancialCrimeForm from './components/FinancialCrimeForm';
import IdentityTheftForm from './components/IdentityTheftForm';
import InstructionPage from './components/InstructionPage'; // Import the InstructionPage component
import logo from './components/assets/logo.jpeg';
import LearnMore from './components/LearnMore';
import Card1 from './components/assets/Card 1.png';
import './App.css';
import './AboutUs.css';

function App() {
  const cards = [
    {
      id: 1,
      image: Card1,
      title: 'Financial Problem',
    },
    {
      id: 2,
      image: logo,
      title: 'Card 2',
      description: 'This is the second card.',
    },
    {
      id: 3,
      image: logo,
      title: 'Card 3',
      description: 'This is the third card.',
    },
  ];

  return (
    <Router>
      <div className="App">
        <LearnMore />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <div className="card-container">
                  {cards.map((card) => (
                    <Card
                      key={card.id}
                      image={card.image}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
                {/* About Us Section */}
                <section className="about-us">
                  <div className="about-content">
                    <div className="logo-space">
                      <img src={logo} alt="Company Logo" />
                    </div>
                    <div className="about-text">
                      <h2>About Us</h2>
                      <p>
                        Welcome to our cyber security platform, your trusted ally in the fight against cyber crime. 
                        Our mission is to protect individuals, businesses, and governments from the growing threat of cyber attacks.
                      </p>
                      <p>
                        With a team of experts, cutting-edge technology, and a passion for keeping cyberspace secure, 
                        we are committed to safeguarding your data and privacy in a digital world.
                      </p>
                    </div>
                  </div>
                </section>
              </>
            }
          />

          {/* Routes for various complaint forms */}
          <Route path="/complaint-now" element={<Complaint />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/complaint-form/cyber-crime" element={<CyberCrimeForm />} />
          <Route path="/complaint-form/financial-crime" element={<FinancialCrimeForm />} />
          <Route path="/complaint-form/identity-theft" element={<IdentityTheftForm />} />

          {/* Route for dynamic instruction pages */}
          <Route path="/instructions/:crimeType" element={<InstructionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;