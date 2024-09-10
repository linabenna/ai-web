import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AboutPage from '../components/AboutPage'


function About() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='About the Club' text='Learn more about the AI Club and its organizers'/>
        <AboutPage/>
        <Footer/>
    </div>
  )
}

export default About