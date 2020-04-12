import React from 'react';
import NavBar from "./NavBar";
import Layout from './Layout';
import Footer from './Footer';

function Homepage() {
    return (
        <>
        <NavBar />
           <Layout>
               <h1>Aja Leachman</h1>
           </Layout>
        <Footer />
        </>
    );
}

export default Homepage;
