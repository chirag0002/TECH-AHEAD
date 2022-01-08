import React from 'react'
import './Styling/App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Homepageheader'
import Brand from './Components/Brand'
import Features from './Components/Features'
import Techs from './Components/Techs'

const App = () => {
  return (
    
     
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Techs />
    <Features />
    {/* <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
 </div>
  )
};

export default App
