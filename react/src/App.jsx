import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Projects from './components/Projects/project.jsx';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact.jsx';
import {Card} from './components/ServiceCard/ServiceCard.jsx';



function App(){
  const [name, setName] = useState("");
  return(
   <div> 
    <Navbar />    
    <Hero
      title="Welcome to Our Website"
      description="We provide innovative solutions to help your business thrive in the digital age."
      button1="Get Started"
      button2="Learn More"
    />
    
    <Features />
    <Projects />
    <Card>
      <h2>Welcome</h2>
      <p>This content came through children.</p>
    </Card>
    <Contact />
    <Footer />
   </div>
  );
}
export default App;