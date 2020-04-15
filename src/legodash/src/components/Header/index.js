import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Link className="navbar-brand" to="/">Legodash</Link>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
