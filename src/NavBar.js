import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
        {/* <Router> */}
            <Navbar expand="md" sticky="top" bg="dark"> 
                <Navbar.Brand className="text-light" href={process.env.PUBLIC_URL + "/"}>Aja Leachman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/poetry">PoetryTest</Link>
                        <Link to={process.env.PUBLIC_URL + "/faith"}>FaithTest</Link>
                        <Nav.Link className="text-light" href={process.env.PUBLIC_URL + "/poetry"}>poetry</Nav.Link>
                        <Nav.Link className="text-light" href={process.env.PUBLIC_URL + "/faith"}>faith</Nav.Link>
                        <Nav.Link className="text-light" href={process.env.PUBLIC_URL + "/about"}>about</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </Router> */}
        </>
    );
}

export default NavBar;
