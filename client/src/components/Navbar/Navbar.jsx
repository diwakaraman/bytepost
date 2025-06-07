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
    <nav className='relative flex items-center justify-between py-4 border-b border-zinc-300 px-6'>
      
      {/* Left Side - Logo */}
      <Link to="/" className="text-xl font-bold mr-auto">
        BytePost
      </Link>

      {/* Right Side - Links */}
      <div className='hidden lg:flex items-center gap-6'>
        {links.map((item, i) => (
          <Link key={i} to={item.to} className="hover:text-blue-600 transition-all duration-300">
            {item.name}
          </Link>
        ))}
        <Link
          to="/signup"
          className="bg-black px-4 py-2 text-zinc-100 hover:bg-blue-600 transition-all duration-300"
        >
          Signup
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className='lg:hidden'>
        <button className='text-3xl' onClick={() => setMobileNav(!MobileNav)}>
          <IoReorderThree />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 nav-bg h-screen w-full backdrop-blur-md p-8 ${MobileNav ? "translate-y-0 flex flex-col" : "translate-y-[-100%]"} transition-all duration-300`}>
        <div className='w-full flex justify-end'>
          <button className='text-3xl' onClick={() => setMobileNav(false)}>
            <RxCross2 />
          </button>
        </div>
        <div className='h-full flex flex-col items-center justify-center'>
          {links.map((item, i) => (
            <Link key={i} to={item.to} className="mb-8 text-4xl hover:text-blue-600 transition-all duration-300" onClick={() => setMobileNav(false)}>
              {item.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="text-4xl bg-black px-8 py-4 text-zinc-100 hover:bg-blue-600 transition-all duration-300"
            onClick={() => setMobileNav(false)}
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
