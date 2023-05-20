import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SplashPage.css'

const SplashPage = () => (
  <div className="splash">
    <div className="splash-content">
      <h1>Mike Cooknick</h1>
      <div className="splash-navigation">
        <Link to="/web" className="splash-nav-element">Web</Link>
        <div className="splash-nav-element-disabled">Video</div>
        <div className="splash-nav-element-disabled">Blog</div>
      </div>
    </div>
  </div>
)

export default SplashPage