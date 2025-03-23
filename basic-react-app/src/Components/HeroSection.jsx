import { FaPlay } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar"; // Import Navbar component

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
    
      <Navbar className="fixed top-0 left-0 w-full z-20" /> {/* Fixed at the top with high z-index */}

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/59008708148f5522792de0d233273fc4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Positioned "TRAVEL WITH US" */}
      <h2 className="absolute top-[22%] left-[5%] text-3xl md:text-5xl text-white">
        TRAVEL WITH US
      </h2>

      {/* Centered Content */}
      <div className="relative text-center bottom-[13%] text-white px-4">
        <h1 className="text-4xl md:text-7xl font-bold">DISCOVER NEW ADVENTURES</h1>
        <h6 className="absolute top-[120%] left-[90%] translate-x-[-50%] text-sm md:text-3xl w-[90%] md:w-[60%] lg:w-[40%] text-center">
          Find The Best Places In The World
        </h6>
      </div>

      {/* Search Bar Inside Hero Section */}
      <div className="absolute bottom-[5%] w-[90%] md:w-full max-w-4xl px-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
