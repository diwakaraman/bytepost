import React from 'react';
import { Link } from 'react-router-dom'; 

const BlogCard = ({ items }) => {
  return (
    <>
      <div className='w-full lg:w-4/6'>
        <img src={items.img} alt="Blog" />
      </div>
      <div className='w-full lg:w-4/6'>
        <h1 className='text-2xl font-semibold'>{items.title}</h1>
        <p className='mb-4'>{items.description.slice(0, 170)}...</p>
        
        
        <Link 
          to={`/description/75444${items.id}`}  
          className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-all duration-300'
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
