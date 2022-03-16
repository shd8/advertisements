import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import AdDetail from './views/AdDetail';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail/:adId" element={<AdDetail />} />
      <Route
        path="*"
        element={(
          <main>
            <Link to="/">Return to safe</Link>
          </main>
        )}
      />
    </Routes>
  </div>
);

export default App;
