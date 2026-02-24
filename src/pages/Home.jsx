import React from "react";
import Slider from "../components/CarouselSlider";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";



const Home = () => {
  return (
    <div>
      
    <Slider/>
     <AboutSection/>
     <MissionVision/>
      <Footer />
    </div>
  );
};

export default Home;
