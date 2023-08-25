import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import SpecialMeals from '../../components/SpecialMeals/SpecialMeals'
import Notified from '../../components/GetNotified/Notified'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SpecialMeals/>
      <Notified/>
      <Footer/>
    </div>
  )
}

export default Home