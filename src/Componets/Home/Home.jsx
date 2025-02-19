import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import Reward from '../Reward/Reward'
import Paymentpartner from '../Paymentpartner/Paymentpartner'
import RummySite from '../RummySite/RummySite'
import Winner from '../Winner/Winner'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
     <Navbar />
      <Dashboard />
      <Reward />
      <Paymentpartner />
      <RummySite />
      <Winner />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home