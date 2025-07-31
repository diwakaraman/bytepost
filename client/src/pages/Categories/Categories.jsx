import React from 'react';
import BlogCard from '../../components/Blog Card/BlogCard';

const Categories = () => {
  const data = [
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*187ivsuCI98pJNqbN5vkVA.gif",
      title: "Understanding Big-O Notation",
      description:
        "Big-O Notation is a key concept in DSA that helps you evaluate time and space complexity. Learn how to analyze algorithm efficiency.",
    },
    {
      img: "https://dotnettrickscloud.blob.core.windows.net/article/data%20structures/5620250712145402.webp",
      title: "Mastering Linked Lists in JavaScript",
      description:
        "Dive into the structure of singly and doubly linked lists, how to implement them, and when to use them over arrays.",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D5622AQGDrea6L0NDKQ/feedshare-shrink_800/0/1732257878480?e=2147483647&v=beta&t=OATvcOdSxlZF-E8fJQqIMxqKm9JM_9_KaXvQ48Ek27U",
      title: "Sorting Algorithms: Visualized",
      description:
        "Understand how popular sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort work with visual animations and examples.",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/0*Roll4bJZYGCO9x3f",
      title: "Binary Trees & Traversals",
      description:
        "Learn about binary trees, traversal techniques (inorder, preorder, postorder), and real-world applications of tree structures.",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1200/1*F4OHUT2_TJOQRp4b7uaYlQ.png",
      title: "Dynamic Programming Simplified",
      description:
        "Break down the complexity of dynamic programming with easy-to-understand examples like Fibonacci, Knapsack, and LIS problems.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 lg:gap-4">
      {data &&
        data.map((items, i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <BlogCard items={items} />
          </div>
        ))}
    </div>
  );
};

export default Categories;
