import React from 'react'
import BlogCard from '../../components/Blog Card/BlogCard';
const AllBlogComponent = () => {
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
        
        {img: "./temp.jpg",
          title: "Lorem ipsum .",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

          {img: "./temp.jpg",
            title: "Lorem ipsum .",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},
  ];
  return (
  <div className='flex flex-col gap-8 lg:gap-4'>
 
{data &&
data.map((items,i) => (
<div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>

<BlogCard items={items}/>
</div>
))}
   
 </div>
    
); 
};

export default AllBlogComponent