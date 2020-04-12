import React from 'react';
import NavBar from "./NavBar";
import Layout from './Layout';
import Footer from './Footer';
import { Form, Button } from "react-bootstrap";

function Login() {
    return (
        <>
            <NavBar />
            <Layout>
                <h1 className="p-3">Aja's Login Portal</h1>
                <Form className="p-3">
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            Only Aja can login here.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Layout>
            <Footer />
        </>
    );
}

export default Login;
