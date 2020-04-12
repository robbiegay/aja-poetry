import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Layout(props) {
    return (
        <>
            <Container fluid>
                <Row className="h-100" >
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                    <Col xs={12} sm={10} md={8} lg={6}>
                        {props.children}
                    </Col>
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                </Row>
            </Container>
        </>
    );
}

export default Layout;

// TODO
// Footer: link to bottom always, align center my name
