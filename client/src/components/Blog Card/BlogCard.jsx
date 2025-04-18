import React from 'react'

const BlogCard = ({items}) => {
  return (
    <>
      <div className=' w-full lg:w-4/6'><img src={items.img} alt="/" /></div>
      <div className=' w-full lg:w-4/6'> <h1 className='text-2xl font-semibold'>{items.title}</h1>
      <p className='mb-4'>{items.description.slice(0,170)}...</p>
      <links className='bg-blue-600 px-4 rounded text-white hover:bg-blue-700 transition-all duration-300 ' to={`/blog/${items._id}`}>Read More</links>
      </div>
     
      </>
  )
}

export default BlogCard
