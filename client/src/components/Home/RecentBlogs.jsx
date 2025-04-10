import React from 'react'

const RecentBlogs = () => {
  const blogs = [
    {
      img:"./temp.jpg",
      title: 'Blog 1',
      description: 'This is the description for blog 1',
      date: '2023-10-01',
    },
    {
      img:"./temp.jpg",
      title: 'Blog 2',
      description: 'This is the description for blog 2',
      date: '2023-10-02',
    },
    {
      img:"./temp.jpg",
      title: 'Blog 3',
      description: 'This is the description for blog 3',
      date: '2023-10-03',
    },
  ];

  return (
    <div className='mb-4 py-4'>
       <h1 className='text-xl font-semibold mb-4'>RecentBlogs</h1>
       <div className='flex flex-col gap-4'>
        
        
       </div>
      </div>
  )
}

export default RecentBlogs