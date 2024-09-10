import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import CommunityPage from '../components/CommunityPage'

const Community = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Events' text='Join us in our Events!'/>
        <CommunityPage/>
        <Footer/>
    </div>
  )
}

export default Community