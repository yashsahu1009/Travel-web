import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import HeroSection from "./Components/HeroSection";
import BeautifulPlaces from "./Components/BeautifulPlaces";
import Categories from "./Components/Categories";
import TravelBooking from "./Components/TravelBooking";
import TravelTrendsSection from "./Components/TravelsTrendsSections.jsx";
import Footer from "./Components/Footer.jsx";
 
 
const App = () => {
  return (
    <div>
    
      
      <HeroSection />
      <BeautifulPlaces />
      <Categories />
       <TravelBooking/>
        <TravelTrendsSection/>
        <Footer/>

     
    </div>
  );
};

export default App;
