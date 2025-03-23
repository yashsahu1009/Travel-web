import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent fixed top-0 w-full z-50">
      <div className="text-white text-3xl font-bold">FlexJapa</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 text-white text-lg font-medium">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/tours" className="hover:underline">Tours</Link></li>
        <li><Link to="/blog" className="hover:underline">Blog</Link></li>
        <li><Link to="/tickets" className="hover:underline">Air tickets</Link></li>
        <li><Link to="/about" className="hover:underline">About us</Link></li>
      </ul>

      {/* Login & Signup Buttons */}
      <div className="hidden md:flex space-x-6">
        {!isLoggedIn ? (
          <>
            <button
              className="bg-[#5F81DA] text-white px-5 py-3 rounded-lg text-lg"
              onClick={handleAuth}
            >
              <i class="mr-1 ri-user-line"></i>Login
            </button>
            <button className="bg-[#5F81DA] text-white px-5 py-3 rounded-lg text-lg">
              Signup
            </button>
          </>
        ) : (
          <button
            className="bg-red-600 text-white px-5 py-3 rounded-lg text-lg"
            onClick={handleAuth}
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-6 py-8 md:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
            <FaTimes size={24} />
          </button>

          <li><Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/tours" className="hover:underline" onClick={() => setIsOpen(false)}>Tours</Link></li>
          <li><Link to="/blog" className="hover:underline" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/tickets" className="hover:underline" onClick={() => setIsOpen(false)}>Air tickets</Link></li>
          <li><Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About us</Link></li>

          {/* Login & Signup inside Mobile Menu */}
          {!isLoggedIn ? (
            <>
              <button
                className="bg-[#5F81DA] text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  handleAuth();
                  setIsOpen(false);
                }}
              >
                Login
              </button>
              <button className="bg-[#5F81DA] text-white px-4 py-2 rounded-lg">
                Signup
              </button>
            </>
          ) : (
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                handleAuth();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
