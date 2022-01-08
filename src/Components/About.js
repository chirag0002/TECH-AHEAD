import React from 'react'
import Header from './Header'
import {Button} from "react-bootstrap"
import chirag from "../Images/Chirag.JPG"
import bhavya from "../Images/Bhavya.JPG"
import aayush from "../Images/Aayush.JPG"
import Footer from "../Components/Footer"
import '../Styling/About.css'

const About = () => {
    return (
        <div className="about">
            <Header />
            <br /><br /><br />        
            <h1 id="Rendering" className="about__title gradient__text" >About Us:</h1>    
            <p className="about__head">
            Welcome, Everyone.
            Since you have come to our website you must be confused about dozens of Technologies Lies Ahead which one is best for you, which one is perfectly aligned towards your career, and much many more questions arising in your minds. Here on “TECH AHEAD” we provide you with information regarding trendy technologies. We have mainly three sections on our website i.e. Artificial Intelligence, BlockChain, and DevOps, where you can explore them. As you know without Projects any learning is not worth it. So, there is a project section available through which you can take ideas and make projects while learning. It is the most effective way to learn about any Technology. Nowadays passive Learning is the most common way to grasp anything so for that we have a Blogs and Videos Section too. With these two you came to know about trendy technologies going on. One more best thing for you is, if you want to learn any technology in depth then there is a Learning Platform column which will render you to any Learning Platform and you can learn that technology in depth.
            This is like “ALL IN ONE BEST SOLUTION FOR TECHIE” where you will get all the resources in one place.
            We would always love your contribution to our website and we also have a contribute section with our Github repository so that you can help us in Contributing more by adding some features, knowledge, content, or your experience which will help the community.
            </p>

            <div className="developers_cont">
            <p class="developers_heading gradient__text">Team SuperContributors</p>
            <p className="quote_developers gradient__text">In the ocean of choices, providing direction to the right career paths. <br /> -Team SuperContributors</p>
            <div className="developers_cont1">
            <img className="chirag" src={chirag} alt="" />
            <p className="chirag_name">
            Chirag Varshney
           
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chirag-varshney-864917202" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://twitter.com/ChiragV0101?t=JttZTqzDXamIjso3JyfBPA&s=09" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://instagram.com/_chirag_varshney_?utm_medium=copy_link" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://github.com/chirag0002" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>

            <img className="aayush" src={aayush} alt="" />
            <p className="aayush_name">
            Aayush Sharma
            
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aayush-sharma-0555a4206/" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://twitter.com/AayushS45351191" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aayusharma1401/" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://github.com/SuperAayush" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>
            <img className="bhavya" src={bhavya} alt="" />
            <p className="bhavya_name">
            Bhavya Sachdeva
            
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bhavya-sachdeva9/" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://twitter.com/bhavya_58" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bhavya_sachdeva__/" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button target="_blank" rel="noopener noreferrer" href="https://github.com/bhavyastar" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>
            </div>            
            </div>
        <Footer />
        </div>
    )
}

export default About
