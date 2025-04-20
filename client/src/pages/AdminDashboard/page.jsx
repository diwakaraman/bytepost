import React from 'react';
import SideBar from '../../components/Profile/SideBar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <div  className='w-1/6 h-screen border-r'>
        {" "}
        <SideBar/>
        </div>
      <div className='w-5/6 bg-zinc-200'>
      <Outlet/>
      </div>

      </div>
  )
}

export default AdminDashboard;