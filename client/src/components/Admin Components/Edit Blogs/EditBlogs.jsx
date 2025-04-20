import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      img: "../temp.jpg",
      title: "Lorem ipsum ",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      img: "../temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      img: "../temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      img: "../temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      img: "../temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      img: "../temp.jpg",
      title: "Lorem ipsum .",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
  ]);

  const handleEdit = (index) => {
    alert(`Edit blog at index ${index}`);
    // navigate(`/edit-blog/${index}`) if you have routing
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      const updatedBlogs = blogs.filter((_, i) => i !== index);
      setBlogs(updatedBlogs);
    }
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Edit Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogs.map((item, i) => (
          <div
            key={i}
            className='bg-white rounded-xl p-4 flex flex-col items-center shadow-lg'
          >
            <div className='w-full'>
              <img src={item.img} alt="Blog" className='rounded-md h-40 w-full object-cover' />
            </div>
            <div className='mt-4 w-full'>
              <h1 className='text-xl font-semibold'>{item.title}</h1>
              <p className='text-sm text-zinc-600 mb-4'>
                {item.description.slice(0, 170)}...
              </p>
            </div>
            <div className='w-full flex flex-col gap-2'>
              <Link to="/admin-dashboard/update-blog/:id"
                onClick={() => handleEdit(i)}
                className='bg-blue-600 text-center text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition'
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(i)}
                className='bg-red-600 text-white rounded-xl px-4 py-2 hover:bg-red-700 transition'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlogs;
