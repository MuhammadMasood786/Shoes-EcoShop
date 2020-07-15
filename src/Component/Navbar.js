import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText} from 'reactstrap';
import '../App.css';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light  className="Navbarstyle" expand="md">
        <NavbarBrand href="/" className="logoHeader">Footwear Mart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto  offset-sm-2" navbar>
            <NavItem >
            <Link to="/" className="linkColor">Home</Link>
            </NavItem>
            <NavItem >
            <Link to="about" className="linkColor">About</Link>
            </NavItem>
            <NavItem >
            <Link to="product" className="linkColor">Product</Link>
            </NavItem>
            <NavItem >
            <Link to="about" className="linkColor">Contact</Link>
            </NavItem>
          </Nav>
          <NavbarText><i className="fa fa-shopping-cart" aria-hidden="true"></i></NavbarText>
          <NavbarText><i className="fa fa-user-circle-o" aria-hidden="true"></i></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;