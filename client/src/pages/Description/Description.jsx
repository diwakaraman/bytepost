import React from 'react'


const BlogCard = ({ items }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 border p-4 rounded shadow-sm hover:shadow-md transition">
      <img
        src={items.img}
        alt={items.title}
        className="w-full md:w-48 h-32 object-cover rounded"
      />
      <div>
        <h2 className="text-lg font-semibold">{items.title}</h2>
        <p className="text-gray-100">{items.description}</p>
      </div>
    </div>
  )
}

const Description = () => {
  
  const data = [
    {
      img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80  ",
      title: "Introduction to Data Structures & Algorithms",
      description:
        "Understand the importance of DSA in solving real-world problems, improving efficiency, and preparing for coding interviews.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg",
      title: "Getting Started with Web Development",
      description:
        "Learn the basics of front-end and back-end development, including HTML, CSS, JavaScript, and popular frameworks.",
    },
    {
      img: "https://www.shutterstock.com/image-photo/software-engineer-development-concepts-programming-260nw-2485654259.jpg",
      title: "Machine Learning Basics",
      description:
        "Discover how machines learn from data, covering supervised and unsupervised learning with practical examples.",
    },
    {
      img: "https://www.masaischool.com/blog/content/images/2022/06/Competitive-Programming.png",
      title: "Competitive Programming Tips",
      description:
        "Boost your problem-solving skills with techniques used in competitive coding platforms like Codeforces and LeetCode.",
    },
    {
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      title: "System Design Fundamentals",
      description: 
        "Dive into designing scalable applications by understanding load balancing, caching, databases, and distributed systems.",
    },
  ]

  return (
    <div className="mb-6 py-4">
      
      <h1 className="text-2xl font-bold mb-4">System Design Fundamentals</h1>
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
        alt="System Design"
        className="w-full lg:w-4/6 my-4 rounded"
      />
      <p className="mb-6 text-white-700">
        System design is the process of defining the architecture, components, and data flow
        of a large-scale software system. It is crucial for building applications that can handle
        millions of users efficiently. In this article, we will explore the basics of scalability,
        fault tolerance, caching, and database design.
      </p>

      <h1 className="text-xl font-semibold mb-4">Related Blogs</h1>
      <div className="flex flex-col gap-6">
        {data.map((items, i) => (
          <BlogCard key={i} items={items} />
        ))}
      </div>
    </div>
  )
}

export default Description
