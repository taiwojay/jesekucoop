import React from 'react'
import { Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {

    return (
      <Navbar collapseOnSelect expand="lg" bg='light' variant="light" sticky='top'>
        <Navbar.Brand as={Link} to ='/'>Jẹsẹ́kù</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
    <Nav>
      <Nav.Link as={Link} to ='/'><FontAwesomeIcon icon={faHome} className='icon'/></Nav.Link>
      <Nav.Link as={Link} to ='/about-us'>About Us</Nav.Link>
      <Nav.Link as={Link} to ='/products&services'>Products & Services</Nav.Link>
      <Nav.Link  as={Link} to ='/register'>
      Register<span><FontAwesomeIcon icon={faUser} className='icon' /></span>
      </Nav.Link>
      <Nav.Link as={Link} to ='/terms&conditions'>Terms & Conditions</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
