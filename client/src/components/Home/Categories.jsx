import React from 'react'
import { Link } from 'react-router-dom';
const Categories = () => {
const cat = [

  {
    name: 'DSA',
    to: "/cat/Dsa",
    bg:"bg-green-200",
  },
  {
    name: 'Web Development',
    to: "/cat/Web",
    bg:"bg-orange-200",
  },
  {
    name: 'Machine Learning',
    to: "/cat/Machine",
    bg:"bg-green-200",

  },
  {
    name: 'Competitive Programming',
    to: "/cat/Competitive",
    bg:"bg-purple-200",
  },
  {
    name: 'System Design',
    to: "/cat/System",
    bg:"bg-indigo-200",
  },
  
];

  return (
    <div className='mb-4 py-4'>
      <h1 className='text-xl font-semibold mb-4'>Categories</h1>
      <div className='flex items-center justify-start'>
        {cat.map((items, i) => (
        <links className={`me-4 px-4 py-2 text-center text-normal md:text-xl font-semibold ${items.bg}rounded`}
        key={i}
        to={items.to}
        >
          {items.name}
        </links>
        ))}
      </div>
    </div>
  )
}

export default Categories