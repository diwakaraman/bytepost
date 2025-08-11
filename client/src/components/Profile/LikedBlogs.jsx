import React from 'react'
import BlogCard from '../Blog Card/BlogCard';
const data = [
  {img: "../recent1.jpg",
  title: "Lorem ipsum ",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

  {img: "../recent2.jpg",
    title: "Lorem ipsum .",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

    {img: "../recent3.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},
];
const LikedBlogs = () => {
  return (
    <div className=''>
    <h1 className='text-xl font-semibold mb-4'>LikedBlogs</h1>
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
  )
}

export default LikedBlogs