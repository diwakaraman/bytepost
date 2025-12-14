import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

    
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          About <span className="text-cyan-400">My Blog</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          My Blog is a modern, community-driven blogging platform built for
          developers, creators, and lifelong learners who love sharing ideas,
          building projects, and growing together.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            This blog started as a simple idea — to create a space where learning
            feels approachable and creativity feels encouraged. Over time, it
            evolved into a platform where developers can document their journeys,
            share real-world experiences, and learn from one another.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you’re just starting out or already deep into your tech
            career, My Blog is designed to support curiosity, experimentation,
            and continuous growth.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Why This Blog Exists
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>• To simplify complex technical concepts</li>
            <li>• To encourage consistent learning</li>
            <li>• To build a supportive tech community</li>
            <li>• To showcase real MERN projects</li>
          </ul>
        </div>
      </section>

    
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">
          What Makes Us Different
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              Practical Learning
            </h3>
            <p className="text-gray-300">
              Articles focus on real-world problems, practical solutions, and
              hands-on examples instead of just theory.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              MERN Focused
            </h3>
            <p className="text-gray-300">
              From beginner tutorials to advanced architecture, MERN stack
              development is at the heart of this platform.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              Community Driven
            </h3>
            <p className="text-gray-300">
              Readers can like, save, and engage with content — making learning
              collaborative instead of isolated.
            </p>
          </div>
        </div>
      </section>

     
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">Built With Modern Tech</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "MongoDB", desc: "Scalable NoSQL database" },
            { name: "Express.js", desc: "Fast backend framework" },
            { name: "React.js", desc: "Dynamic user interfaces" },
            { name: "Node.js", desc: "High-performance server runtime" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-white/10 rounded-xl p-6 text-center shadow-md"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-300 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Our Community</h2>
        <p className="text-gray-300 leading-relaxed">
          My Blog is more than just articles — it’s a growing community of
          developers who believe in learning by building, sharing knowledge,
          and supporting each other. Every like, save, and comment helps shape
          the future of this platform.
        </p>
      </section>

     
      <section className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Learning Journey Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-white/90">
          Explore articles, build projects, and become part of a growing
          developer community powered by curiosity and creativity.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
          Explore Blogs
        </button>
      </section>

    </div>
  );
};

export default About;
