import React from 'react'

const RecentBlogs = () => {
  const data = [
    {img: "./temp.jpg",
    title: "Lorem ipsum ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

    {img: "./temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},

      {img: "./temp.jpg",
        title: "Lorem ipsum .",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."},
  ];

  return (
    <div className='mb-4 py-4'>
       <h1 className='text-xl font-semibold mb-4'>RecentBlogs</h1>
       <div className='flex flex-col gap-4'>
{data &&
data.map((items,i) => (
  <div key={i}>
    <h3>{items.title}</h3>
    <p>{items.description}</p>
  </div>
))}
        
       </div>
      </div>
  )
}

export default RecentBlogs