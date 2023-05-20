import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import SplashPage from './pages/SplashPage';
import WebPage from './pages/WebPage';
import Blog from './blog';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WebPage />} />
        <Route path="/splash" element={<SplashPage />} />
        <Route path='/web' element={<WebPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<SplashPage />} />
      </Routes>
    </div>
  )
}

export default App;
