import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const cat = [
    { name: 'DSA', to: '/cat/Dsa', bg: 'bg-green-200' },
    { name: 'Web Development', to: '/cat/Web', bg: 'bg-orange-200' },
    { name: 'Machine Learning', to: '/cat/Machine', bg: 'bg-green-200' },
    { name: 'Competitive Programming', to: '/cat/Competitive', bg: 'bg-purple-200' },
    { name: 'System Design', to: '/cat/System', bg: 'bg-indigo-200' },
  ];

  return (
    <div className="mb-6 py-4">
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className="flex flex-wrap gap-3">
        {cat.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className={`px-4 py-2 text-sm md:text-base font-medium text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform ${item.bg}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
