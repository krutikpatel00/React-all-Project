import React from 'react'
import Header from './Components/Header/Header'
import './index.css'
import Banner from './Components/Banner/Banner'
import DealsOffers from './Components/DealsOffers/DealsOffers'
import Outdoor from './Components/Outdoor/Outdoor'
import Electronics from './Components/Electronics/Electronics'
import From from './Components/From/From'
import Recommended from './Components/Recommended/Recommended'
import ExtraServices from './Components/ExtraServices/ExtraServices'
import Suppliers from './Components/Suppliers/Suppliers'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <DealsOffers></DealsOffers>
      <Outdoor />
      <Electronics />
      <From />
      <Recommended />
      <ExtraServices />
      <Suppliers />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App