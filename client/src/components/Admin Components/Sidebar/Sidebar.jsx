import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const links =[
     {to:"/admin-dashboard",name:"Dashboard"},
     {to:"/admin-dashboard/add-blogs",name:"Add Blogs"},
     {to:"/admin-dashboard/edit-blogs",name:"Edit Blogs"},
  ];
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold'>Admin Page</h1>
      <hr className='my-4'/>
     <div className='flex flex-col gap-4'>
     {links.map((items, i) => (
        <Link to={items.to} key={i} className='text-xl hover:scale-105 transition-all duration-300'>{items.name}</Link>
      ))}
     </div>
    </div>
  )
}

export default Sidebar