import React from 'react'
import BlogCard from '../Blog Card/BlogCard';
const data = [
  {img: "../nature1.jpg",
  title: "Lorem ipsum ",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

  {img: "../nature2.jpg",
    title: "Lorem ipsum ",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},
  

];
const Favorites = () => {
  return (
    <div className=''>
    <h1 className='text-xl font-semibold mb-4'>Favorites</h1>
    <div className='flex flex-col  gap-8 lg:gap-4'>
{data &&
data.map((items,i) => (
<div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>



 <BlogCard items={items}/>
</div>
))}
     
    </div>
   </div>
  )
}

export default Favorites