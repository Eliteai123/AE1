import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import TixaeChat from './components/TixaeChat';
import { AuroraBackground } from './components/ui/aurora-background';
import Timeline from './pages/Timeline';

function App() {
  return (
    <Router>
      <AuroraBackground className="!h-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/x" element={<Navigate to="https://twitter.com/elite_ai" replace />} />
        </Routes>
        <Footer />
        <TixaeChat />
      </AuroraBackground>
    </Router>
  );
}

export default App;