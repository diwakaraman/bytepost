import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className=" flex flex-col gap-8">

      
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Build, Read & Share on Your
          <span className="block text-cyan-400">Own Blogging Platform</span>
        </h1>
        <p className="text-lg text-white-300 max-w-3xl">
          Discover thoughtfully written blogs on technology, development,
          innovation, and digital trends — all crafted to inspire learning
          and spark ideas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">

        
        <div className="w-full md:w-1/2">
          <img
            src="/home.jpg"
            alt="Blogging Hero"
            className="rounded-2xl w-full h-[35vh] md:h-[45vh] lg:h-[55vh] object-cover shadow-lg"
          />
        </div>

       
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">
            Welcome to <span className="text-cyan-400">BytePost</span>
          </h2>

          <p className="text-white-500 leading-relaxed">
            BytePost is a modern blogging platform built for curious minds.
            Whether you are a beginner exploring web development or a seasoned
            developer sharing knowledge, this space is designed for meaningful
            content and real-world insights.
          </p>

          <p className="text-white-500 leading-relaxed">
            From MERN stack tutorials to tech opinions and productivity hacks,
            every article is written to educate, inspire, and empower readers.
          </p>

  
          <div className="grid grid-cols-2 gap-4 text-sm text-white-500">
            <div>🚀 MERN Stack Focused</div>
            <div>📚 Curated Quality Content</div>
            <div>❤️ Like & Save Blogs</div>
            <div>👥 Growing Tech Community</div>
          </div>

        
          <div className="flex gap-4 pt-4">
            <Link
              to="/all-blogs"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg text-white font-semibold"
            >
              Explore Blogs
            </Link>

            <Link
              to="/signup"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-6 py-3 rounded-lg font-semibold"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">500+</h3>
          <p className="text-gray-300 text-sm">Blogs Published</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">50+</h3>
          <p className="text-gray-300 text-sm">Topics Covered</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">1K+</h3>
          <p className="text-gray-300 text-sm">Active Readers</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">24/7</h3>
          <p className="text-gray-300 text-sm">Learning Access</p>
        </div>
      </div>

    </section>
  );
};

export default Header;
