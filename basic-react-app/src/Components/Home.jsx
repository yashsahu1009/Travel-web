 import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/beach.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-xl uppercase tracking-wide">Travel With Us</h2>
        <h1 className="text-5xl font-bold mt-2">Discover New Adventures</h1>
        <p className="mt-3 text-lg">Find The Best Places In The World</p>
        <button className="flex items-center mt-5 px-6 py-3 bg-blue-600 rounded-full">
          <FaPlay className="mr-2" /> Play Video
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg flex gap-4">
        <div className="flex flex-col">
          <label className="text-gray-600">Accomodation</label>
          <select className="border p-2 rounded">
            <option>Ibiza, Spain</option>
            <option>Maldives</option>
            <option>Paris, France</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600">Check-in</label>
          <input type="date" className="border p-2 rounded" />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600">Check-out</label>
          <input type="date" className="border p-2 rounded" />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Search</button>
      </div>
    </div>
  );
};

export default Home;
