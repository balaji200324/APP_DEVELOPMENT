import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homepage.css';

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-name-small"><i>VJB</i></span>
          </div>
          <div className="navbar-right-small">
            <ul className="nav-links">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="video-background"></div>
    </div>
  );
}

export default HomePage;
