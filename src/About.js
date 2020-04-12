import React from "react";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Footer from "./Footer";
import { Container, Row, Col, Image } from "react-bootstrap";


function About() {
    let iconSize = "100px";

    return (
        <>
            <NavBar />
            <Layout>
                <Container className="mt-4">
                    <Row>
                        <Col xs={4}>
                            <Image className="py-5" src={process.env.PUBLIC_URL + "/images/aja-headshot.jpg"} roundedCircle fluid />
                        </Col>
                        <Col xs={8}>
                            <h1>Aja Leachman</h1>
                            <p className="text-justify">
                                Aenean in purus volutpat, pharetra sapien sit amet, tristique nibh. 
                                Vivamus at sem neque. Donec lectus urna, vehicula sed pellentesque eu, 
                                facilisis in dui. Nulla tristique ut tellus at egestas. Integer id 
                                tincidunt tortor. Sed ac hendrerit nisl. Nam aliquam aliquet imperdiet. 
                                Sed mollis turpis nec sem fringilla, non malesuada lectus dignissim. 
                                In vitae malesuada nisi.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                        <a href="https://twitter.com/aja_lenell" title="Aja's Twitter Page"><Image src={process.env.PUBLIC_URL + "/icons/twitter.png"} style={{ height: iconSize }} className="m-3" /></a>{" "}
                        {/* <a href="" title="Aja's LinkedIn Page"><Image src={process.env.PUBLIC_URL + "/icons/linkedin.png"} style={{ height: iconSize }} className="mb-3" /></a>{" "} */}
                        <a href="https://www.snapchat.com/add/aja_lenell" title="Aja's Snapchat Page"><Image src={process.env.PUBLIC_URL + "/icons/snapchat.png"} style={{ height: iconSize }} className="m-3" /></a>{" "}
                        <a href="https://www.facebook.com/aja.leachman" title="Aja's Facebook Page"><Image src={process.env.PUBLIC_URL + "/icons/facebook.png"} style={{ height: iconSize }} className="m-3" /></a>{" "}
                        <a href="https://www.instagram.com/aja_lenell/" title="Aja's Instagram Page"><Image src={process.env.PUBLIC_URL + "/icons/instagram.png"} style={{ height: iconSize }} className="m-3" /></a>{" "}
                        </Col>
                    </Row>
                </Container>

                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <small className="text-secondary">
                    Social media icons created by <u><a className="text-secondary" href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a></u> from <u><a className="text-secondary" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></u>
                </small>
            </Layout>
            <Footer />
        </>
    );
}

export default About;
