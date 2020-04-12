import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Navbar bg="dark">
                <Navbar.Collapse className="align-self-start">
                    <Navbar.Text>
                        <Navbar.Text className="text-secondary">&copy; 2020 Aja Leachman. All rights reserved.</Navbar.Text>
                    </Navbar.Text>
                </Navbar.Collapse>
                {/* Not perfectly centered */}
                <Navbar.Collapse className="align-self-center">
                    <Navbar.Text>
                        <Nav.Link href="https://www.robbiegay.art/" target="_blank" rel="noopener noreferrer" className="text-secondary">Site By: Robbie Gay</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end no-gutters">
                    <Navbar.Text>
                        <Nav.Link href={process.env.PUBLIC_URL + "/login"} className="text-secondary">Aja Login</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Footer;
