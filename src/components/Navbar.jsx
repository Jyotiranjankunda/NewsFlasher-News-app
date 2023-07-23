import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (navbarOpen) {
      setNavbarOpen(false);
    }
    window.scrollTo(0,0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Zilla Slab, serif', fontWeight: "500", color: "white" }}>
          News Flasher
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 changeColor">
            <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/"
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/general' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/general"
                onClick={() => handleLinkClick('/general')}
              >
                General
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/business' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/business"
                onClick={() => handleLinkClick('/business')}
              >
                Business
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/entertainment' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/entertainment"
                onClick={() => handleLinkClick('/entertainment')}
              >
                Entertainment
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/health' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/health"
                onClick={() => handleLinkClick('/health')}
              >
                Health
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/science' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/science"
                onClick={() => handleLinkClick('/science')}
              >
                Science
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/sports' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/sports"
                onClick={() => handleLinkClick('/sports')}
              >
                Sports
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/technology' ? 'active' : ''}`}>
              <Link
                className="nav-link"
                to="/technology"
                onClick={() => handleLinkClick('/technology')}
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
