import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.scss';
import logo from './logo3.png';
import { getLocalStorageItem } from "../../util/localStorage";

const NavBar = () => {
  const logged_user = getLocalStorageItem("user");

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
        <NavDropdown title={logged_user.firstName} id="collasible-nav-dropdown" className="danger">
          <NavDropdown.Item href={`/user/${logged_user.id}`}>حسابي</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
