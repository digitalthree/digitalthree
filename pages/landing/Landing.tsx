import React from 'react';
import Navbar from '../../shared/navBar/IndexNavbar'
import Footer from '../../shared/footer/Footer'
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Preventivo from "./components/Preventivo";
import Portfolio from "./components/Portfolio";

const Landing: React.FC = () => {


    return (
        <>
            <Navbar transparent/>
            <main>
                <Hero/>
                <Services/>
                <Team/>
                <Portfolio/>
                <Preventivo/>
            </main>
            <Footer/>

        </>
    )
}

export default Landing