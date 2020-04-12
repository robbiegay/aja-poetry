import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
    return (
        <>
        <Router>
            <Navbar expand="md" sticky="top" bg="dark"> 
                <Navbar.Brand className="text-light" href="/">Aja Leachman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-light" href="/poetry">poetry</Nav.Link>
                        <Nav.Link className="text-light" href="/faith">faith</Nav.Link>
                        <Nav.Link className="text-light" href="/about">about</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Router>
        </>
    );
}

export default NavBar;
