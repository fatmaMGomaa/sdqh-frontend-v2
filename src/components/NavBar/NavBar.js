import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import './NavBar.scss';
import logo from './logo3.png';
import {UserContext} from '../../Contexts/UserProvider'

const NavBar = () => {
  const {loggedUser, isLogged, log_out} = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar__container justify-content-between">
      <Navbar.Brand as={Link} to="/"><img src={logo} width="150" alt="sdqh logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>

          <NavDropdown title='رعاية الإنسان' id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to='/case/?caseType=human'>الخريظة</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/filters/?caseType=human'>الحالات</NavDropdown.Item>
          </NavDropdown>
     
          <NavDropdown title='رعاية الحيوان' id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to='/case/?caseType=animal'>الخريطة</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/filters/?caseType=animal'>الحالات</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
          {isLogged && 
            <Nav className="mr-auto">
              <NavDropdown title={loggedUser.firstName} id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/user/${loggedUser.id}`}>حسابي</NavDropdown.Item>
                <Button variant="link" onClick={log_out} className='dropdown-item'>الخروج</Button>
              </NavDropdown> 
              <Button variant="outline-secondary" as={Link} to='/addcase'>حالة جديدة</Button>
            </Nav>
          }
          {!isLogged && 
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/login">الدخول</Nav.Link>
              <Button variant="outline-secondary" as={Link} to='/signup'>حساب جديد</Button>
            </Nav>
          }
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
