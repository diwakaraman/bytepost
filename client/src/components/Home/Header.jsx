import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full px-6 py-10 bg-gray-50">
      {/* Heading Section */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
          Hey, I’m Code Master!
        </h1>
        <p className="text-lg text-gray-600">
          Discover new blogs about technology and trends.
        </p>
      </div>

      {/* Image + Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="./temp.jpg"
            alt="temp"
            className="w-full h-[40vh] md:h-[50vh] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest in Tech</h2>
          <p className="text-gray-600 mb-6">
            Stay ahead with the latest articles, insights, and trends in technology.
            Learn about AI, web development, software tips, and more — all curated
            to help you grow.
          </p>
          <Link
            to="/all-blogs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
          >
            Explore Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
