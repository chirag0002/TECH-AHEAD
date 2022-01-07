import React from 'react'
import './Styling/App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Homepageheader'

const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
  )
}

export default App
