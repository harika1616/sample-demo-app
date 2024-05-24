import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container footer">
      <Container className="d-flex justify-content-between align-items-center">
        <div>© Copyright 2024 Vision Design</div>
        <div className="footer-right-text">
          Design and coding by Responsive Team
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
