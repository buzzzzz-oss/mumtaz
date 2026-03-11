import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Sectors from './pages/Sectors';
import FacilityManagement from './pages/FacilityManagement';
import PestControl from './pages/PestControl';
import CleaningCrew from './pages/CleaningCrew';
import Inquiry from './pages/Inquiry';
import WhatWeDo from './pages/WhatWeDo';
import PeopleSolutions from './pages/PeopleSolutions';
import EnvironmentalSolutions from './pages/EnvironmentalSolutions';
import LeadershipProfile from './pages/LeadershipProfile';
import SectorOverview from './pages/SectorOverview';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/facility-management" element={<FacilityManagement />} />
            <Route path="/pest-control" element={<PestControl />} />
            <Route path="/cleaning-crew" element={<CleaningCrew />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/people-solutions" element={<PeopleSolutions />} />
            <Route path="/environmental-solutions" element={<EnvironmentalSolutions />} />
            <Route path="/leadership/:leaderId" element={<LeadershipProfile />} />
            <Route path="/sectors/:sectorId" element={<SectorOverview />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

