import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">BARK</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
          <li className="nav__item"><a href="#tokenomics" className="nav__link">Tokenomics</a></li>
          <li className="nav__item"><a href="#faq" className="nav__link">FAQ</a></li>
          <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;