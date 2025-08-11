import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const links = [
    { to: "/admin-dashboard", name: "Dashboard" },
    { to: "/admin-dashboard/add-blogs", name: "Add Blogs" },
    { to: "/admin-dashboard/edit-blogs", name: "Edit Blogs" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token'); // clear auth token
    navigate('/login'); // redirect to login
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold'>Admin Page</h1>
      <hr className='my-4' />
      <div className='flex flex-col gap-4'>
        {links.map((items, i) => (
          <Link
            to={items.to}
            key={i}
            className='text-xl hover:scale-105 transition-all duration-300'
          >
            {items.name}
          </Link>
        ))}
      </div>
      <div>
        <button
          onClick={handleLogout}
          className='mt-5 bg-black text-white px-4 py-2 w-[100%] hover:bg-zinc-700 rounded'
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
