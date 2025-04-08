import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
const links=[
  {
    name:"Home",  
    to:"/",
  },
  {
    name:"AllBlogs",  
    to:"/",
  },
  {
    name:"Profile",  
    to:"/",
  },
  {
    name:"Login",  
    to:"/",
  },
  
  
];

  return (
    <nav className='flex items-center justify-between py-4'>
 <div className='w-2/6 brandName'></div>
 <links to="/" className="text-xl font-bold">Meta</links>
 <div className='w-4/6flex items-center justify-end'>
  {links.map((item,i) => (
     <Link  className="ms-4 hover:text-blue-600 transition-all duration-300" key={i} to={item.to}>
       {item.name}
     </Link>
  ))}
 <Link  className="ms-4 bg-black px-4 py-2 text-zinc-100  hover:bg-blue-600 transition-all duration-300" to="/signup" >
       Signup
     </Link>

  

 </div>
  
    </nav>
   
  );
};

export default Navbar