// Navbar.tsx
import React, { useState } from 'react';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <strong>{name}</strong>
        </div>
        <div
          className={`navbar-burger burger ${isMenuOpen ? 'is-active' : ''}`}
          data-target="navbarMenu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarMenu" className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-end" style={{ justifyContent: 'flex-end' }}>
          <div className="navbar-item">
            <a href="#about" onClick={toggleMenu} style={{ fontSize: '0.9em' }}>
              0.1 About
            </a>
          </div>
          <div className="navbar-item">
            <a href="#experience" onClick={toggleMenu} style={{ fontSize: '0.9em' }}>
              0.2 Experience
            </a>
          </div>
          <div className="navbar-item">
            <a href="#work" onClick={toggleMenu} style={{ fontSize: '0.9em' }}>
              0.3 Work
            </a>
          </div>
          <div className="navbar-item">
            <a href="#contact" onClick={toggleMenu} style={{ fontSize: '0.9em' }}>
              0.4 Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
