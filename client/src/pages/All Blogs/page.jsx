import React from 'react'
import BlogCard from '../../components/Blog Card/BlogCard';

const AllBlogs = () => {
  const data = [
    {
      img: "./nature.jpg",
      title: "Exploring the Tranquility of Forest Trails",
      description: "Take a deep dive into the serene world of forest paths, where the air is crisp, the trees whisper, and nature’s calm embraces every step you take.",
    },

    {
      img: "../nature1.jpg",
      title: "Sunsets Over Still Waters",
      description: "Experience the golden hues of dusk reflected on calm lakes. Discover why sunsets near water bodies offer unmatched peace and inspiration for photographers and travelers alike.",
    },

    {
      img: "../nature2.jpg",
      title: "The Beauty of Blooming Meadows",
      description: "Colorful flowers dancing in the breeze, wide-open meadows, and the gentle hum of bees — a journey through nature's floral paradise awaits you here.",
    },
    
    {
      img: "../nature5.jpg",
      title: "Mountains: Nature’s Towering Marvels",
      description: "Stand in awe of snow-capped peaks and rugged cliffs. Explore the mystery, adventure, and breathtaking views offered by the world’s most majestic mountains.",
    },

    {
      img: "../nature4.jpg",
      title: "Wonders of the Forest Canopy",
      description: "Look up! Discover life among the treetops — from hidden birds to beams of sunlight breaking through dense leaves. Nature is vibrant above our heads.",
    },
  ];

  return (
    <div className='mb-4 py-4'>
      <h1 className='text-xl font-semibold mb-4'>AllBlogs</h1>
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

export default AllBlogs;
