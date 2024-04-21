import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { routeLink } from '../../shared/shared';

import "./NavBar.css"

interface Props {

}

const NavBar = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <Navbar expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" className={pathname === routeLink.home ? "active" : ""} exact>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about" className={pathname === routeLink.about ? "active" : ""}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/process" className={pathname === routeLink.process ? "active" : ""}>Process</NavLink>
        </NavItem>
      </Nav>
      <div className="email_id_container">
        <span className="email_id">ali.mubashir40@gmail.com</span>
      </div>
    </Navbar>
  );
};

export default NavBar;
