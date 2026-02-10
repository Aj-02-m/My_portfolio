import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import SiteNavbar from './components/SiteNavbar';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import API_BASE_URL from './config';

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}api/profile`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => setError("Backend is not reachable"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-bg">
      <div className="app-content">
        <Router>
          <SiteNavbar profile={profile} loading={loading} error={error} />
          <Routes>
            <Route path="/" element={<Home profile={profile} loading={loading} error={error} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
