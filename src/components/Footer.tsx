import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2024 BARK. All rights reserved.</p>
      <div className="footer__social">
        <a href="#" className="footer__social-link"><i className="fab fa-facebook"></i></a>
        <a href="#" className="footer__social-link"><i className="fab fa-twitter"></i></a>
        <a href="#" className="footer__social-link"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;