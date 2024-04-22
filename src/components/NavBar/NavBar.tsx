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
    <div className="d-flex mb-3 navbar">
      <div className="p-2">
        <span>
          <NavLink tag={Link} to="/" className={pathname === routeLink.home ? "active" : ""} exact>Home</NavLink>
        </span>
      </div>
      <div className="p-2">
        <span>
          <NavLink tag={Link} to="/about" className={pathname === routeLink.about ? "active" : ""}>About</NavLink>
        </span>
      </div>
      <div className="p-2">
        <span>
          <NavLink tag={Link} to="/process" className={pathname === routeLink.process ? "active" : ""}>Process</NavLink>
        </span>
      </div>
      <div className="email_id_container ms-auto p-2">
        <span className="email_id">ali.mubashir40@gmail.com</span>
      </div>
    </div>
  );
};

export default NavBar;
