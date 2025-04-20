import React from 'react'

const AddBlogs = () => {
  return (
    <div className='p-4 h-screen'>
      <h1 className='text-2xl font-semibold'>Add Blogs</h1>
      <form action=''className=' flex flex-col gap-4'>
        <input type='text' 
        placeholder='title'
        className='borde-none outline-mone p-4 ng-transparent text-3xl border-b border-zinc-400 font-semibold w-full'/>
         <textarea type='text' 
        placeholder='Description'
        className='borde-none outline-mone p-4 ng-transparent text-xl border-b border-zinc-400 font-semibold w-full'/>
        <div><input type='file' className='bg-zinc-900 rounded text-white' accept=".jpeg, .png, .jpg"/></div>
        <div>
        <button className='bg-blue-600 text-white rounded px-4 py-2 shadow-2xl hover:bg-blue-700 transition-all duration-300'>
          Add Blogs
        </button>
        </div>
      </form>
      </div>
  )
}

export default AddBlogs