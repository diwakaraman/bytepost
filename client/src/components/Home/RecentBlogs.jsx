import React from 'react'
import BlogCard from '../Blog Card/BlogCard';

const RecentBlogs = () => {
  const data = [
    {
      img: "../recent1.jpg",
      title: "Morning Mist in the Mountains",
      description: "Wake up to the beauty of mist rolling over tranquil hills. This blog captures the peaceful charm of mountain mornings and the silence that speaks louder than words.",
    },

    {
      img: "../recent2.jpg",
      title: "Waves and Wanderlust",
      description: "Whether you're walking barefoot on the beach or watching waves crash from a cliff, oceans always stir the soul. Dive into the healing power of coastal escapes.",
    },

    {
      img: "../recent5.jpg",
      title: "Into the Wild Trails",
      description: "Dense forests, winding trails, and the thrill of not knowing what's around the corner. Explore why hiking into nature is more than just a journey—it's therapy.",
    },
  ];

  return (
    <div className='mb-4 py-4'>
      <h1 className='text-xl font-semibold mb-4'>RecentBlogs</h1>
      <div className='flex flex-col gap-8 lg:gap-4'>
        {data &&
          data.map((items, i) => (
            <div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
              <BlogCard items={items} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
