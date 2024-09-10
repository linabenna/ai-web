import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import ApplyForm from '../components/ApplyForm'

const Apply = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading='Join the Board!' text='2024-2025'/>
      <ApplyForm/>
      <Footer/>
    </div>
  )
}

export default Apply
