// Navbar.tsx
import React from 'react';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <strong>{name}</strong>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a href="#about">About</a>
        </div>
        <div className="navbar-item">
          <a href="#experience">Experience</a>
        </div>
        <div className="navbar-item">
          <a href="#work">Work</a>
        </div>
        <div className="navbar-item">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
