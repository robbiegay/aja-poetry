import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavBar from "./NavBar";
import { Nav } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Navbar bg="dark">
                <Navbar.Collapse className="align-self-start">
                    <Navbar.Text>
                        <Navbar.Text className="text-light">&copy; 2020 Aja Leachman. All rights reserved.</Navbar.Text>
                    </Navbar.Text>
                </Navbar.Collapse>
                {/* Not perfectly centered */}
                <Navbar.Collapse className="align-self-center">
                    <Navbar.Text>
                        <Nav.Link href="https://www.robbiegay.art/" className="text-light">Site Built by Robbie Gay</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end no-gutters">
                    <Navbar.Text>
                        <Nav.Link href="/login" className="text-light">Aja Login</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Footer;
