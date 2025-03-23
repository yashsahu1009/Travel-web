import React from "react";

const places = [
  "https://media.istockphoto.com/id/154232673/photo/blue-ridge-parkway-scenic-landscape-appalachian-mountains-ridges-sunset-layers.jpg?s=612x612&w=0&k=20&c=m2LZsnuJl6Un7oW4pHBH7s6Yr9-yB6pLkZ-8_vTj2M0=", // Valid image link
  "/src/assets/srivatsan-balaji-T5s48osIQTU-unsplash.jpg",
  "/src/assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg", // Update path
  "https://img.freepik.com/premium-photo/beautiful-coastal-village-cinque-terre-italy_287743-430.jpg?w=740", // Valid image link
  "https://images.pexels.com/photos/9407837/pexels-photo-9407837.jpeg?auto=compress&cs=tinysrgb&w=600", // Valid image link
  "https://images.pexels.com/photos/3265456/pexels-photo-3265456.jpeg?auto=compress&cs=tinysrgb&w=600", // Valid image link
  
  
];

const BeautifulPlaces = () => {
  return (
    <div className="flex items-center justify-center   p-8">
      <div className="bg-white p-10 rounded-lg flex flex-col md:flex-row items-center md:items-start   w-full">
        <div className="md:w-1/3 text-center md:text-left space-y-4 mb-8 md:mb-0 mt-8">
          <h1 className="text-5xl font-bold text-gray-900">
            Explore The Most  Beautiful  Places In  The World
          </h1>
          <p className="text-gray-600 text-xl">
            A list of Top 50 Places to see in the br world for a Perfect Holiday
          </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition transform translate-y-2 mt-8">
  Explore
</button>

        
        
        </div>
        <div className="md:w-2/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mt-6 md:mt-0  md:ml-12 justify-end items-end">
 
 

 
 

          <div className="col-span-1transform translate-y-2">
            <img src={places[0]} alt="Beautiful Place" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
          <div className="col-span-1 transform -translate-y-10 ">
            <img src={places[1]} alt="Beautiful Place" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
          <div className="col-span-1 transform -translate-y-6">
            <img src={places[2]} alt="Beautiful Place" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
          <div className="col-span-1 transform translate-y-4">
            <img src={places[3]} alt="Beautiful Place" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
          <div className="col-span-1 transform -translate-y-2">
            <img src={places[4]} alt="Beautiful Place" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
          <div className="col-span-1 transform translate-y-2">
            <img src={places[5]} alt="Beautiful Place" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulPlaces;
