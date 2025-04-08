import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/page';

const MainLayout = () => {
  return (

    <div className='px-64'>
      <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default MainLayout;