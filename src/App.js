import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Result from './pages/Result';

function App() {
  const [predictions, setPredictions] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload setPredictions={setPredictions} />} />
        <Route path="/result" element={<Result predictions={predictions} />} />
      </Routes>
    </Router>
  );
}

export default App;
