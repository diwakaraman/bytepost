import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/page';

const MainLayout = () => {
  return (

    <div className=' px-12 md:px-32 lg:px-64 bg-yellow-400'>
      <Navbar/>
    <main className='my-4'>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default MainLayout;