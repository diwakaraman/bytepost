import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="px-12 md:px-32 lg:px-64 bg-gradient-to-b from-purple-500 via-indigo-600 to-gray-800 min-h-screen text-white">
      <Navbar />
      <main className="my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
