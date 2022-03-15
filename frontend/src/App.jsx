import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Dashboard />} />
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
