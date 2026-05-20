import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>📞 8555989544</span>
          <span>✉️ bijjasrikar25@gmail.com</span>
          <span>⏰ Mon–Sat: 9 AM – 7 PM</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-rainbow">Rainbow</span><span className="logo-overseas"> Overseas</span>
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/abroad-education" onClick={() => setMenuOpen(false)}>Education</NavLink></li>
            <li><NavLink to="/travel-holidays" onClick={() => setMenuOpen(false)}>Travel</NavLink></li>
            <li><NavLink to="/finance" onClick={() => setMenuOpen(false)}>Finance</NavLink></li>
            <li><NavLink to="/insurance" onClick={() => setMenuOpen(false)}>Insurance</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </nav>

        <a href="tel:+918555989544" className="btn-enquire">📞 Call Now</a>
      </div>
    </header>
  );
}

export default Navbar;
