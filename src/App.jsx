import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FacilityManagement from './pages/FacilityManagement';
import PestControl from './pages/PestControl';
import CleaningCrew from './pages/CleaningCrew';
import Inquiry from './pages/Inquiry';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facility-management" element={<FacilityManagement />} />
            <Route path="/pest-control" element={<PestControl />} />
            <Route path="/cleaning-crew" element={<CleaningCrew />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

