import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "AllBlogs", to: "/all-blogs" },
    { name: "Profile", to: "/profile" },
    { name: "About", to: "/about" },
    { name: "Login", to: "/login" },
  ];

  const [MobileNav, setMobileNav] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!search.trim()) return;

    const timer = setTimeout(() => {
      navigate(`/all-blogs?search=${encodeURIComponent(search)}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, navigate]);

  return (
    <nav className="relative h-20 flex items-center justify-between px-6 border-b border-zinc-300 bg-white shadow z-50">

     
      <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text tracking-wider">
        <Link to="/">BytePost</Link>
      </div>

     
      <div className="hidden md:flex items-center gap-3">

        
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            px-3 py-1 rounded-md
            bg-amber-500/10
            text-amber-800 placeholder-amber-600
            border border-amber-400/40
            focus:border-amber-500 outline-none
          "
        />

        {links.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="px-2 py-1 rounded-md text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition"
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/signup"
          className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-blue-600 transition"
        >
          Signup
        </Link>
      </div>

      <button
        className="md:hidden text-4xl text-gray-800"
        onClick={() => setMobileNav(true)}
      >
        <IoReorderThree />
      </button>

     
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md p-8 z-40 ${
          MobileNav ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-300`}
      >
        <div className="flex justify-end">
          <button
            className="text-3xl text-white"
            onClick={() => setMobileNav(false)}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center space-y-8">

         
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-sm px-4 py-3 rounded-lg
              bg-white/10 text-white placeholder-gray-300
              border border-white/20 outline-none
            "
          />

          {links.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={() => setMobileNav(false)}
              className="text-4xl font-semibold text-white hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/signup"
            onClick={() => setMobileNav(false)}
            className="text-2xl bg-black px-8 py-4 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
