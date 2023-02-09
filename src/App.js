import React from 'react'

import { AboutUs, FindUs, Footer, Gallery, Header, Menu } from './Container';
import { Navbar } from './Components';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App