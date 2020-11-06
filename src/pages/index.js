import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection/Index';
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />
            <Services />
            <InfoSection {...HomeObjThree} />
        </>
    )
}
//PASSING DATA WITH OBJECT {...HomeObjOne} of data.js
export default Home
