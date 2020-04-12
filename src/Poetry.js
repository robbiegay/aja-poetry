import React from 'react';
import NavBar from "./NavBar";
import Layout from './Layout';
import Footer from './Footer';
import { Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Poetry() {
    return (
        <>
            <NavBar />
            <Layout>
                <br />
                <h1>Poetry</h1>
                <p className="text-justify py-3">
                    Aenean in purus volutpat, pharetra sapien sit amet, tristique nibh. Vivamus at
                    sem neque. Donec lectus urna, vehicula sed pellentesque eu, facilisis in dui.
                    Nulla tristique ut tellus at egestas. Integer id tincidunt tortor. Sed ac hendrerit
                    nisl. Nam aliquam aliquet imperdiet. Sed mollis turpis nec sem fringilla, non
                    malesuada lectus dignissim. In vitae malesuada nisi.
                </p>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header style={{ backgroundColor: "lightGray" }} className="text-center">
                            <b>Poems</b>
                        </Card.Header>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" style={{ cursor: "pointer" }}>
                            2019
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Link to="/poetry/black-porcelain">Black Porcelain</Link><br />
                                <Link to="/poetry/morning">morning</Link><br />
                                <Link to="/poetry/good-is-not-always-right">Good is Not Always Right</Link><br />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" style={{ cursor: "pointer" }}>
                            2020
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>coming soon...</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </Layout>
            <Footer />
        </>
    );
}

export default Poetry;
