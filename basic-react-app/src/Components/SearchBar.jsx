import { useState, useRef } from "react";
import { FaPlane, FaHome, FaCar, FaGlobe, FaSearch, FaExchangeAlt } from "react-icons/fa";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("Air Tickets");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const tabs = [
    { name: "Tours", icon: <FaGlobe /> },
    { name: "Housing", icon: <FaHome /> },
    { name: "Air Tickets", icon: <FaPlane /> },
    { name: "Car Rental", icon: <FaCar /> },
  ];

  return (
    <div className="w-full flex flex-col items-center p-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-6 border-b w-full max-w-3xl justify-center text-gray-400">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 pb-2 text-lg font-semibold transition-all duration-200 ${
              activeTab === tab.name ? "text-white border-b-2 border-blue-500" : ""
            }`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-[#d4cecc52] p-6 mt-6 rounded-lg shadow-lg flex flex-wrap justify-between items-center w-full max-w-4xl gap-4">
        
        {/* Accommodation Section */}
        <div className="flex items-center border rounded-lg p-2 bg-gray-100">
          <div className="flex flex-col flex-grow min-w-[150px]">
            <span className="text-sm text-gray-500">Accommodation</span>
            <div className="flex items-center">
              <FaGlobe className="text-blue-500 mr-2" />
              <select className="outline-none bg-transparent w-full text-lg">
                <option>Ibiza, Spain</option>
                <option>Paris, France</option>
              </select>
            </div>
          </div>
        </div>

        {/* Check-in & Check-out Combined Box */}
        <div className="flex items-center border rounded-lg p-2 bg-gray-100">
          {/* Check-in */}
          <div className="flex items-center flex-grow relative">
            <input
              ref={checkInRef}
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="outline-none bg-transparent w-full text-lg pl-4 cursor-pointer"
            />
            {!checkIn && (
              <span className="absolute left-4 bottom-6 text-gray-500 pointer-events-none">Check-in</span>
            )}
          </div>

          {/* Swap Icon */}
          <div className="flex items-center justify-center w-10 h-10 mx-2 bg-gray-200 rounded-full">
            <FaExchangeAlt className="text-gray-600 text-lg" />
          </div>

          {/* Check-out */}
          <div className="flex items-center flex-grow relative">
            <input
              ref={checkOutRef}
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="outline-none bg-transparent w-full text-lg pl-4 cursor-pointer"
            />
            {!checkOut && (
              <span className="absolute left-4 bottom-6 text-gray-500 pointer-events-none">Check-out</span>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center text-lg font-bold hover:bg-blue-600 transition-all">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
