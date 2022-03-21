import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import AdDetail from './views/AdDetail';
import AddAd from './views/AddAd';
import NavBar from './components/NavBar';

const App = () => (
  <div className="App">
    <NavBar />

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail/:adId" element={<AdDetail />} />
      <Route path="/new" element={<AddAd />} />
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
