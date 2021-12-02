import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import SplashPage from './pages/SplashPage';
import WebPage from './pages/WebPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WebPage />} />
        <Route path="/splash" element={<SplashPage />} />
        <Route path='/web' element={<WebPage />} />
      </Routes>
    </div>
  )
}

export default App;
