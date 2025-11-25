import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ServicesSection from "../Services/Services";
import CallToAction from "./Components/CallToAction";
import Faq from "./Components/Faq";
import Footer from "../../Components/Footer/Footer";  
import "../Home/HomeStyles.css";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About heading="About Us"/>
      <ServicesSection/>
      <CallToAction/>
      <Faq/> 
      <Footer/>
    </div>
  );
};

export default Home;
