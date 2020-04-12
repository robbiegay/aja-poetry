import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar expand="md" sticky="top" bg="dark">
                <Navbar.Brand className="text-light" href="/">Aja Leachman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/poetry" className="text-light px-1">poetry</Link>
                        <Link to="/faith" className="text-light px-1">faith</Link>
                        <Link to="/about" className="text-light px-1">about</Link>
                        {/* <Nav.Link className="text-light" href={process.env.PUBLIC_URL + "/poetry"}>poetry</Nav.Link> */}
                        {/* <Nav.Link className="text-light" href={process.env.PUBLIC_URL + "/faith"}>faith</Nav.Link> */}
                        {/* <Nav.Link className="text-light" href={process.env.PUBLIC_URL + "/about"}>about</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;
