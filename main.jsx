import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReportIncident from './components/ReportIncident';
import IncidentList from './components/IncidentList';
import ResourceList from './components/ResourceList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/incident-list" element={<IncidentList />} />
        <Route path="/resource-list" element={<ResourceList />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
