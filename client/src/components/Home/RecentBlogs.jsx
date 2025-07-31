import React from 'react'
import BlogCard from '../Blog Card/BlogCard';

const RecentBlogs = () => {
  const data = [
    {
      img: "./temp.jpg",
      title: "The Rise of AI in Everyday Life",
      description:
        "Artificial Intelligence is no longer futuristic. From voice assistants to smart homes, explore how AI is reshaping our daily routines.",
    },
    {
      img: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Top 10 Travel Destinations for 2025",
      description:
        "From serene beaches to bustling cityscapes, discover the most breathtaking places you should visit in 2025 with travel tips and more.",
    },
    {
      img: "https://images.unsplash.com/photo-1620013768249-7acfabb12730?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mastering React in 30 Days",
      description:
        "React is one of the most popular frontend libraries. Learn the roadmap, tools, and resources to become proficient in React development.",
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beginner’s Guide to Home Workouts",
      description:
        "No gym? No problem. This guide walks you through effective exercises, routines, and tips to stay fit from the comfort of your home.",
    },
    {
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "5 Easy Meals You Can Cook in Under 20 Minutes",
      description:
        "Save time without compromising flavor. These quick recipes are perfect for busy days and beginner-friendly cooking adventures.",
    },
  ];

  return (
    <div className='mb-4 py-4'>
      <h1 className='text-xl font-semibold mb-4'>Recent Blogs</h1>
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
