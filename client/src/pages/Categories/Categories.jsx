import React from 'react'
import BlogCard from '../../components/Blog Card/BlogCard';

const Categories = () => {
 
  const data = [
    {
      img: "../dsa.png",
      title: " Data Structures and alogorithms",
      description: "Learn the fundamentals of arrays, stacks, queues, and more in JavaScript. Perfect for beginners and intermediate developers preparing for technical interviews.",
    },

    {
      img: "../dsa2.jpg",
      title: "Understanding Recursion with Visual Examples",
      description: "Explore recursion step-by-step with easy-to-follow visuals and real coding problems that simplify one of the trickiest concepts in programming.",
    },

    {
      img: "../dsa3.jpg",
      title: "Graph Algorithms Explained Simply",
      description: "From BFS to Dijkstra's algorithm, get a clear and beginner-friendly explanation of key graph algorithms used in real-world tech interviews.",
    },
    
    {
      img: "../temp.jpg",
      title: "How to Approach Coding Interviews",
      description: "Ace your next interview with structured strategies, preparation tips, and common pitfalls to avoid when solving DSA problems.",
    },

    {
      img: "../dsa1.jpg",
      title: "Top 10 Dynamic Programming Problems",
      description: "A curated list of the most asked dynamic programming problems with detailed explanations and optimized solutions in multiple languages.",
    },
  ];

  return (
    <div className='flex flex-col gap-8 lg:gap-4'>
      {data && data.map((items, i) => (
        <div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
          <BlogCard items={items} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
