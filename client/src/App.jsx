import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import AdminComplaintsPage from './pages/AdminComplaintsPage';
import HomePage from './pages/HomePgaes';
function App() {
  return (
    <BrowserRouter>
<HomePage/>
    </BrowserRouter>
  );
}

export default App;