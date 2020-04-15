import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, InputGroup, FormControl, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">
        Legodash
      </Link>
      <InputGroup>
        <FormControl
          placeholder="Search by product code"
          aria-label="Search by product code"
          aria-describedby="Search by product code"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
