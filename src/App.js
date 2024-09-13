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
import InstructionPage from './components/InstructionPage'; 
import logo from './components/assets/logo.jpeg';
import LearnMore from './components/LearnMore';
import Card1 from './components/assets/Card 1.png';
import AboutUs from './components/AboutUs'; // Import AboutUs component
import './App.css';
import UsefulLinks from './components/UsefulLinks';
import Footer from './components/Footer';

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
      title: 'Cyber Crime',
      description: 'Report any cyber-related incidents.',
    },
    {
      id: 3,
      image: logo,
      title: 'Identity Theft',
      description: 'Secure your identity by reporting theft.',
    },
  ];

  return (
    <Router>
      <div className="App">
        <LearnMore />
        <Navbar />
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Card/>
                {/* <div className="card-container">
                  {cards.map((card) => (
                    <Card
                      key={card.id}
                      image={card.image}
                      title={card.title}
                      description={card.description}
                    /> */}
                  {/* ))}
                </div> */}
                {/* About Us Section, added after cards */}
                <AboutUs />
                <br/>
                <UsefulLinks/>
                <br/>
                <Footer/>
              </>
            }
          />
          {/* Complaint and forms routes */}
          <Route path="/theft-form" element={<IdentityTheftForm />} />
          <Route path="/financial-crime-form" element={<FinancialCrimeForm />} />
          <Route path="/cyber-crime-form" element={<CyberCrimeForm />} />
          <Route path="/complaint-now" element={<Complaint />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />

          {/* Dynamic route for instruction pages based on crime type */}
          <Route path="/instructions/:crimeType" element={<InstructionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;