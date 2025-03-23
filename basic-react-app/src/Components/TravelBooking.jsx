import React from "react";
import Button1 from './Button1'; // Adjust the path as needed

export default function TravelBooking() {
  return (
    <div>
      {/* Hero Section */}
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      {/* Popular Destinations Section */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {[
            { name: "Dubai", price: "$850.99", img: " https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTrXxLQoMK228Ztvu-POd-zTzi3_xLW53HPgF9yBNX5X4oj3JSAsMgXP7-8A4gW9JHbFcnHNsRfg2bT27q_W__me_iTQcuIGbWkKUmh1g" },
            { name: "Maldives", price: "$649.99", img: "https://lh5.googleusercontent.com/p/AF1QipO-1a4geXw7NGKxYF83c9MpItG-pvYZVFP4f9_e=w675-h390-n-k-no" },
            { name: "Santorini", price: "$879.99", img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRrz83Efd639L6APcl-VNRrn8Nbry5jvN5XeWKi0Obl45G8RRhsjnMKadTO9ZwHjZc8hv59RDpF_w_uI-2Elf8r34mL574K-aDWwV4HSw" },
            { name: "Ireland", price: "$550.99", img: "https://lh5.googleusercontent.com/p/AF1QipOJKCx5-eV_EaZeo7DWIp5Y4DqWHc9LX0DzEI5O=w675-h390-n-k-no" },
            { name: "Venice", price: "$610.00", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQa9wMlmgvY4y1Y9IofDkreGzXRYEPXVRILINa9r6Unjt4CNDbQccaC5riK-350f1IU35DKQG91IaMrWpct11A_eWgJntqz85CNrPBxIg" },
            { name: "Ibiza", price: "$950.00", img: "https://lh5.googleusercontent.com/p/AF1QipPJC8E1WWc1I88N5p-E6U-5QfqWvOB0-EF8dyr7=w675-h390-n-k-no" },
          ].map((destination, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={destination.img}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <p className="text-sm text-orange-300">{destination.price}</p>
              </div>
            </div>
          ))}
        </div>
        <Button1 className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-lg">All Destinations</Button1>
      </div>

      {/* Our Top Testimonials Section */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Top Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {[
            { name: "Leslie Alexander", role: "Entrepreneur", img: "https://img.freepik.com/free-photo/fascinating-girl-knitted-red-sweater-playfully-smiling-bridge-sunny-day_197531-6799.jpg?semt=ais_hybrid", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra vel aliquam suspendisse." },
            { name: "Brooklyn Simmons", role: "Entrepreneur", img: "data:image/jpeg;base64,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", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra vel aliquam suspendisse." },
            { name: "Jacob Jones", role: "Engineer", img: "https://thumb.photo-ac.com/cf/cf187884829392c03b1463c660fa61e4_t.jpeg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra vel aliquam suspendisse." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-blue-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 