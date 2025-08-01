import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='my-4 flex items-center justify-center flex-col'>
      {/* Heading Section */}
      <div className='text-4xl flex flex-col w-full items-start'>
        <h1 className='font-bold'>Your Own Blogging Platform!</h1>
        <h2 className='text-lg font-light text-gray-600'>Discover new blogs on technology, trends, and innovation</h2>
      </div>

      {/* Hero Section */}
      <div className='my-8 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='w-full md:w-1/2'>
          <img
            src="../home.jpg"
            alt='Blogging Hero'
            className='rounded w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover'
          />
        </div>

        <div className='w-full md:w-1/2'>
          <h1 className='text-3xl font-bold'>Welcome to BytePost</h1>
          <p className='mt-2 mb-8 text-gray-700'>
            Explore the latest posts on software development, tech innovations, and digital trends. Whether you're a beginner or a tech-savvy pro, our curated blogs bring you stories worth reading and insights worth sharing.
          </p>
          <Link
            // to="/"
            className='inline-block mt-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded text-white'
          >
            Read Blogs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
