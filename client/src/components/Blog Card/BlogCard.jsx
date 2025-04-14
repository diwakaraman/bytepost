import React from 'react'

const BlogCard = ({items}) => {
  return (
    <>
      <div className='w-2/6'><img src={items.img} alt=" " /></div>
      <div className='w-4/6'> <h1 className='text-2xl font-semibold'>{items.title}</h1>
      <p>{items.description}</p>
      </div>
     
      </>
  )
}

export default BlogCard
