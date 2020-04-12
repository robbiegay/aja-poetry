import React from 'react';
import NavBar from "./NavBar";
import Layout from './Layout';
import Footer from './Footer';

function Login() {
    return (
        <>
        <NavBar />
           <Layout>
               <p>Login</p>
           </Layout>
        <Footer />
        </>
    );
}

export default Login;
