import React from 'react'
import Navbar from './Navbar/navbar'
import FirstSection from './FirstSection/page'
import SecondSection from './SecondSection/page'
import FifthSection from './FifthSection/page'
import SixthSection from './SixthSection/page'
import Footer from './Footer/page'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <FifthSection/>
        <SixthSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage