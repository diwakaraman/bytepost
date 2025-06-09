import React from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "All Blogs", to: "/all-blogs" },
    { name: "Profile", to: "/Profile" },
    { name: "Login", to: "/Login" },
  ];

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <nav className="relative z-50 w-full bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-gray-800">
          BytePost
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="text-gray-600 hover:text-blue-600 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="text-3xl text-gray-700 lg:hidden"
        >
          {mobileNavOpen ? <RxCross2 /> : <IoReorderThree />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200 px-6 py-8 lg:hidden flex flex-col items-center space-y-6 transition-all duration-300">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="text-xl text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            onClick={() => setMobileNavOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
