import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnglishPage from './pages/EnglishPage';
import HindiPage from './pages/HindiPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-purple-50">
        <Routes>
          <Route path="/" element={<EnglishPage />} />
          <Route path="/english" element={<EnglishPage />} />
          <Route path="/hindi" element={<HindiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;