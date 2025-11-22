import React from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "AllBlogs", to: "/all-blogs" },
    { name: "Profile", to: "/Profile" },
    { name: "Login", to: "/Login" },
  ];

  const [MobileNav, setMobileNav] = React.useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 border-b border-zinc-300 bg-white shadow">
      
     
      <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text tracking-wider">
        <Link to="/">BytePost</Link>
      </div>

      
      <div className="w-4/6 flex items-center justify-end gap-2"> 
        {links.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="px-2 py-1 rounded-md text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/signup"
          className="px-3 py-2 bg-black text-white text-sm rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Signup
        </Link>

        
        <div className="flex items-center justify-end">
          <button
            className="text-3xl text-gray-800 ml-2"
            onClick={() => setMobileNav(!MobileNav)}
          >
            <IoReorderThree />
          </button>
        </div>
      </div>

     
      <div
        className={`fixed top-0 left-0 nav-bg h-screen w-full bg-white/90 backdrop-blur-md p-8 z-40 ${
          MobileNav ? "translate-y-0 flex flex-col" : "translate-y-[-100%]"
        } transition-all duration-300`}
      >
        <div className="w-full flex justify-end">
          <button
            className="text-3xl text-gray-800"
            onClick={() => setMobileNav(false)}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={() => setMobileNav(false)}
              className="mb-8 text-4xl font-semibold hover:text-blue-600 transition duration-300"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/signup"
            onClick={() => setMobileNav(false)}
            className="text-2xl bg-black px-8 py-4 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
