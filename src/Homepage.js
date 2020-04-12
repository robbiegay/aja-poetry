import React from 'react';
import NavBar from "./NavBar";
import Layout from './Layout';
import Footer from './Footer';
import { Image } from "react-bootstrap";
import Typing from 'react-typing-animation';

function Homepage() {
    return (
        <>
            <NavBar />
            <div className="bg">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Typing speed={75}>
                    <Typing.Delay ms={1500} />
                    <h1 className="text-light">Aja Leachman</h1>
                    <Typing.Delay ms={1000} />
                    <h2 className="text-light">Poet<Typing.Delay ms={250} />,<Typing.Delay ms={250} /> <Typing.Delay ms={250} />Teacher<Typing.Delay ms={250} />,<Typing.Delay ms={250} /> <Typing.Delay ms={250} />Christian</h2>
                </Typing>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <small className="text-secondary align-bottom">
                    Background photo by <u><a className="text-secondary" href="https://unsplash.com/@katstokes_?utm_medium=referral&amp;\utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Photos from Kat Stokes"><span>Kat Stokes</span></a></u>
                </small>
            </div>
            <Footer />
        </>
    );
}

export default Homepage;
