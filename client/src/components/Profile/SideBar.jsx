import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const SideBarLinks = [
    {
      name: 'Dashboard',
      to: '/profile',
    },
    {
      name: 'Favorites',
      to: '/profile/favorites',
    },
    {
      name: 'Liked Blogs',
      to: '/profile/liked-blogs',
    },
  ];

  const handleLogout = () => {
    
    localStorage.removeItem('authToken');

    
    navigate('/login');
  };

  return (
    <div className="w-full border-r rounded-xl flex flex-col gap-4 p-4 bg-white shadow-md">
      {SideBarLinks.map((item, i) => (
        <Link
          to={item.to}
          className="hover:font-semibold text-gray-700 hover:text-black transition"
          key={i}
        >
          {item.name}
        </Link>
      ))}
      <button
        onClick={handleLogout}
        className="bg-zinc-500 text-white rounded-lg px-4 py-2 hover:bg-zinc-800 transition-all duration-300 mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
