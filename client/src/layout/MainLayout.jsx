import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
     <div className="
      min-h-screen text-gray-200
      bg-gradient-to-b
      from-[#e97508fd]   /* deep espresso */
      via-[#60310e]    /* dark amber */
      to-[#5e3a18]     /* warm orange-brown */
    ">
      <Navbar />

      <main className="pt-24 px-6 md:px-20 lg:px-40 pb-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
