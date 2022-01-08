import React from 'react'
import './Styling/App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Homepageheader'
import Brand from './Components/Brand'
import Features from './Components/Features'
import Techs from './Components/Techs'
import Roadmap from './Components/Roadmap'
import Contribute from './Components/Contribute'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'

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
    <Roadmap />
    <Contribute />
    <Blogs />
    <Footer />
 </div>
  )
};

export default App
