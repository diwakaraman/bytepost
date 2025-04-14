import React from 'react'
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
const links=[
  {
    name:"Home",  
    to:"/",
  },
  {
    name:"AllBlogs",  
    to:"/all-blogs",
  },
  {
    name:"Profile",  
    to:"/Profile",
  },
  {
    name:"Login",  
    to:"/Login",
  },
  
  
  
];
const [MobileNav,setMobileNav]=React.useState(false);

  return (
    <nav className=' relative flex items-center justify-between py-4 border-b border-zinc'>
 <div className=' w-3/6 lg:w-2/6 brandName'></div>
 <links to="/" className="text-xl font-bold">BytePost</links>
 <div className='w-4/6 flex items-center justify-end'>
  {links.map((item,i) => (
     <Link  className="ms-4 hover:text-blue-600 transition-all duration-300" key={i} to={item.to}>
       {item.name}
     </Link>
  ))}
 <Link  className="ms-4 bg-black px-4 py-2 text-zinc-100  hover:bg-blue-600 transition-all duration-300" to="/signup" >
       Signup
     </Link>

     <div className='w-4/6 hidden lg:flex items-center justify-end'>
     </div>
     <div className='w-3/6 hidden lg:flex items-center justify-end'>
     <button className='text-3xl ' onClick={()=>setMobileNav(!MobileNav)}><IoReorderThree />
     </button>
     </div>
 </div>
     <div className={`fixed top-0 left-0 nav-bg h-screen w-full backdrop-blur-md p-8 ${MobileNav ? " translate-y-[0%] flex flex-col"
     : "  translate-y-[-100%]"} transition-all duration-300`}>

      <div className='w-full flex justify-end'><button className='text-3xl' onClick={()=>setMobileNav(!MobileNav)} ><RxCross2 />
        </button></div>

      <div className='h-[100%] flex flex-col items-center justify-center'>
      {links.map((item,i) => (
     <Link  className="mb-8 text-4xl hover:text-blue-600 transition-all duration-300" key={i} to={item.to}>
       {item.name}
     </Link>
     ))}
 <Link  className=" text-4xl  bg-black px-8 py-4 text-zinc-100  hover:bg-blue-600 transition-all duration-300" to="/signup" >
       Signup
     </Link>

      </div>
     </div>
    </nav>
   
  );
};

export default Navbar