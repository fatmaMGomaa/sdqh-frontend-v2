import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import './NavBar.scss';
import logo from './logo3.png';
import {AuthContext} from '../../Contexts/UserProvider'

const NavBar = () => {
  const {loggedUser, isLogged, log_out} = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar__container justify-content-between">
      <Navbar.Brand href="/"><img src={logo} width="150" alt="sdqh logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">الرئيسية</Nav.Link>

          <NavDropdown title='رعاية الإنسان' id="collasible-nav-dropdown">
            <NavDropdown.Item href='/case/?caseType=human'>الخريظة</NavDropdown.Item>
            <NavDropdown.Item href='/'>الحالات</NavDropdown.Item>
          </NavDropdown>
     
          <NavDropdown title='رعاية الحيوان' id="collasible-nav-dropdown">
            <NavDropdown.Item href='/case/?caseType=animal'>الخريطة</NavDropdown.Item>
            <NavDropdown.Item href='/'>الحالات</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
          {isLogged && 
            <Nav className="mr-auto">
              <NavDropdown title={loggedUser.firstName} id="collasible-nav-dropdown">
                <NavDropdown.Item href={`/user/${loggedUser.id}`}>حسابي</NavDropdown.Item>
                <Button variant="link" onClick={log_out} className='dropdown-item'>الخروج</Button>
              </NavDropdown> 
              <Button variant="outline-primary" href='/addcase'>حالة جديدة</Button>
            </Nav>
          }
          {!isLogged && 
            <Nav className="mr-auto">
              <Nav.Link href="/login">الدخول</Nav.Link>
              <Button variant="outline-primary" href='/signup'>حساب جديد</Button>
            </Nav>
          }
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
