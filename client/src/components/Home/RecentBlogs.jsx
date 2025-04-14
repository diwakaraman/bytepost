import React from 'react'
import BlogCard from '../Blog Card/BlogCard';

const RecentBlogs = () => {
  const data = [
    {img: "./temp.jpg",
    title: "Lorem ipsum ",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

    {img: "./temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

      {img: "./temp.jpg",
        title: "Lorem ipsum .",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},
  ];

  return (
    <div className='mb-4 py-4'>
       <h1 className='text-xl font-semibold mb-4'>RecentBlogs</h1>
       <div className='flex flex-col  gap-8 lg:gap-4'>
{data &&
data.map((items,i) => (
  <div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
   
    {/* <h3>{items.title}</h3>
    <p>{items.description}</p> */}
   
    <BlogCard items={items}/>
  </div>
))}
        
       </div>
      </div>
  );
};

export default RecentBlogs;