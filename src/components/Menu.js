import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mx-3" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/product">
            Product
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/company">
            Company
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com" target="_blank">
            <FaFacebook size={30} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
