import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';


function App(){
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
    <Footer />
   </div>
  );
}
export default App;