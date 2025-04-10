import React from 'react'

const BlogCard = ({items}) => {
  return (
    <>
      <div className='w-2/6'></div>
      <div className='w-4/6'>
      <h1>{items.title}</h1></div>
      </>
  )
}

export default BlogCard
