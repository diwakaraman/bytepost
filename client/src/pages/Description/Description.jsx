import React from 'react'

const Description = () => {
  const AllBlogs = () => {
    const data = [
      {img: "./nature.jpg",
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
    <div className='mb-4 py-4'>
    <h1 className='text-xl font-semibold mb-4'>AllBlogs</h1>
    <div className='flex flex-col  gap-8 lg:gap-4'>
  {data &&
  data.map((items,i) => (
  <div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
  
  <BlogCard items={items}/>
  </div>
  ))}
     
    </div>
   </div>
      
  ); 
  };
  return (
    <div>
      
      <h1 className='text-2xl font-semibold'>Lorem ipsum dolor</h1>
      <img src="../temp.jpg" alt="Blog" className='w-full lg:w-4/6 my-4' />
      <p className='mb-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sint laudantium fugit omnis neque repellat eum quisquam vero reprehenderit! Nam sapiente velit ex, molestiae incidunt sed quia sunt repudiandae dolor?
      </p>

    </div>
  )
}

export default Description