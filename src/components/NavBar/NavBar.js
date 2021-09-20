import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavBar.scss';
import logo from './logo3.png';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar__container">
      <Navbar.Brand href="/"><img src={logo} width="150" alt="sdqh logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link href="/">الرئيسية</Nav.Link>
          <Nav.Link href="/human">رعاية الإنسان</Nav.Link>
          <Nav.Link href="/animal">رعاية الحيوان</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
