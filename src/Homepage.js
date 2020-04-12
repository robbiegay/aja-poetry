import React from 'react';
import NavBar from "./NavBar";
import Layout from './Layout';
import Footer from './Footer';

function Homepage() {
    return (
        <>
        <NavBar />
           <Layout>
               <p>Home</p>
           </Layout>
        <Footer />
        </>
    );
}

export default Homepage;
