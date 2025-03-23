import React, { useState } from "react";
import { Card, CardContent } from "./Card"; // Import custom Card components
import Button from "./Button"; // Import custom Button component
import { Star } from "lucide-react";

// Define categories
const categories = [
  "HOTELS & RESORTS",
  "RESTAURANTS & CAFES",
  "RELIGIOUS & SPIRITUAL",
  "TOURISM",
];

// Define data for each category
const places = {
  "HOTELS & RESORTS": [
    {
      name: "Santino Hotel",
      image: "/src/assets/allphoto-bangkok-fzmMaeN44po-unsplash.jpg",
      rating: 4,
    },
    {
      name: "Ibiza Resort",
      image: "/src/assets/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg",
      rating: 5,
    },
    {
      name: "Seaside Resort",
      image: "/src/assets/syed-ali-l2OdGlshGC0-unsplash.jpg",
      rating: 4,
    },
    {
      name: "Lakeview Hotel",
      image: "/src/assets/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg",
      rating: 4,
    },
  ],
  "RESTAURANTS & CAFES": [
    {
      name: "Café De La Ville",
      image: "/src/assets/p-KveL_hxuY0Q-unsplash.jpg", // Add your restaurant image
      rating: 5,
    },
    {
      name: "Sushi World",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/7a/89/de/sushi-bar-and-kitchen.jpg?w=900&h=500&s=1", // Add your restaurant image
      rating: 4,
    },
    {
      name: "The Bistro",
      image: " https://popmenucloud.com/cdn-cgi/image/width=640,height=640,format=png,fit=scale-down/ykzbuxhi/14044323-8878-4920-b6b0-950c26e80723.jpg", // Add your restaurant image
      rating: 4,
    },
    {
      name: "Pasta Palace",
      image: " https://b.zmtcdn.com/data/pictures/7/21116547/95fb64107e866728f8113a452f34ad71_featured_v2.jpg", // Add your restaurant image
    },
  ],
  "RELIGIOUS & SPIRITUAL": [
    {
      name: "Golden Temple",
      image: "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwdGVtcGxlJTIwYW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D", // Add your spiritual site image
      rating: 5,
    },
    {
      name: "Mount Sinai",
      image: "https://media.istockphoto.com/id/1211603394/photo/beautiful-view-from-the-mountain-panorama-mountain-range-with-visible-silhouettes-through-the.jpg?s=612x612&w=0&k=20&c=O3ounPmb9chiClVF3nvD-jah7sJBZEzFkhktmuZxPWc=", // Add your spiritual site image
      rating: 4,
    },
    {
      name: "Kailasa Temple",
      image: "https://t3.ftcdn.net/jpg/03/94/35/86/360_F_394358682_gW7f6Ep4h6cCfVncqxoz0lbaN1pFObwv.jpg", // Add your spiritual site image
      rating: 5,
    },
    {
      name: "The Vatican",
      image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRuxX7PuUArzzQyytnWYyEseMonJ4Iws2MQ&s", // Add your spiritual site image
      rating: 5,
    },
  ],
  "TOURISM": [
    {
      name: "Taj Mahal",
      image: "/src/assets/jovyn-chamb-iWMfiInivp4-unsplash.jpg", // Add your tourism site image
      rating: 5,
    },
    {
      name: "Great Wall of China",
      image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c3/9b/c5/the-great-wall-at-badaling.jpg?w=1200&h=1200&s=1", // Add your tourism site image
      rating: 4,
    },
    {
      name: "Grand Canyon",
      image: "https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600", // Add your tourism site image
      rating: 5,
    },
    {
      name: "Machu Picchu",
      image: "https://www.incatrailmachu.com/img/machu-picchu-02-011.jpg", // Add your tourism site image
      rating: 5,
    },
  ],
};

export default function HotelListing() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold">Popular Categories</h2>
      <div className="flex space-x-9 mt-4 border-b pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 border-b-2 text-2xl font-medium transition-colors duration-200 ${
              activeCategory === category
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {places[activeCategory]?.slice(0, 4).map((place, index) => (
          <Card key={index} className="shadow-lg">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <CardContent>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < place.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-sm text-gray-500">
                Experience exquisite comfort and relaxation.
              </p>
              <Button className="mt-3 w-full">View</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button variant="outline">See More</Button>
      </div>

      {/* Add Travel Booking Section */}
      <div
        className="relative w-full h-full mt-3 flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://cdn.britannica.com/41/79641-050-27D8D9C2/beach-Oahu-Hawaii.jpg')" }}
      >
        <div className="text-center px-6   p-6 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            For Travel Experience Book Online Today
          </h1>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-4">
            We offer over 800 different tours around the world. Just pick the place, time, and the tour is yours. Nothing close to your city? Contact us so we can organize a tour in your neighborhood.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-lg">Book Now</Button>
        </div>
      </div>
    </div>
  );
}
